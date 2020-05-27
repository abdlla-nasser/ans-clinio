import { all, select, put, takeLatest } from "redux-saga/effects";
import createApiUrl from "../../../utils/createApiUrl";
import { postRequest } from "../../../utils/httpRequests";
import validateForm from "../utils/validation";

import { ON_LOGIN } from "./types";
import { onLoginSuccess, onLoginFailure } from "./actions";
import { setUserToken } from "../../BasePage/modules/actions";

const loginSelector = ({ loginReducer }) => loginReducer;

function* requestLogin({ actionToNavigate }) {
  try {
    const { username, password } = yield select(loginSelector);

    const formErrors = validateForm({
      username,
      password,
    });

    const isThereFormErrors = !!formErrors;

    if (isThereFormErrors) {
      return yield put(onLoginFailure(formErrors));
    } else {
      const apiUrl = createApiUrl({
        url: "general/login",
      });

      let response = yield postRequest(apiUrl, {
        email: username,
        password,
      });
      response = yield response.json();

      if (response === "email_not_found") {
        yield put(onLoginFailure({ formError: "Email does not exist" }));
      } else if (response === "incorrect_password") {
        yield put(onLoginFailure({ formError: "Incorrect password" }));
      } else {
        const { Active_Flag } = response.data;
        if (Active_Flag && Active_Flag === false) {
          yield put(
            onLoginFailure({
              formError: "Your account is inactive, please contact admin.",
            })
          );
        } else {
          yield put(onLoginSuccess(response.data));
          yield put(setUserToken(response.token));
          return actionToNavigate("/home");
        }
      }
    }
  } catch (error) {
    yield put(
      onLoginFailure({
        formError: "Something went wrong.",
      })
    );
    console.log("Error in requestLogin => ", error);
  }
}

export default function* loginSaga() {
  yield all([takeLatest(ON_LOGIN, requestLogin)]);
}
