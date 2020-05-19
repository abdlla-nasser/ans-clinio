import { all, select, put, takeLatest } from "redux-saga/effects";
import createApiUrl from "../../../utils/createApiUrl";
import { postRequest } from "../../../utils/httpRequests";
import validateForm from "../utils/validation";
import { setToStorage } from "../../../utils/localStorage";

import { ON_LOGIN } from "./types";

import { onLoginSuccess, onLoginFailure } from "./actions";

const loginSelector = ({ loginReducer }) => loginReducer;

function* requestLogin({ actionToNavigate }) {
  try {
    const { username, password, formError } = yield select(loginSelector);

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
        if (!Active_Flag) {
          yield put(
            onLoginFailure({
              formError: "Your account is inactive, please contact admin.",
            })
          );
        } else {
          yield setToStorage("userData", response);
          yield put(onLoginSuccess(response.data));
          return actionToNavigate("/empty");
        }
      }
    }
  } catch (error) {
    console.log("Error in requestLogin => ", error);
  }
}

export default function* loginSaga() {
  yield all([takeLatest(ON_LOGIN, requestLogin)]);
}
