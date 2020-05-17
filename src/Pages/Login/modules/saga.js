import { all, select, put, takeLatest } from "redux-saga/effects";
import createApiUrl from "../../../utils/createApiUrl";
import { postRequest } from "../../../utils/httpRequests";
import validateForm from "../utils/validation";

import { ON_LOGIN } from "./types";

import { onClickLoginFinished } from "./actions";

const loginSelector = ({ loginReducer }) => loginReducer;

function* requestLogin({ navigateTo }) {
  try {
    const { username, password } = yield select(loginSelector);

    const formErrors = validateForm({
      username,
      password,
    });

    const isThereFormErrors = !!formErrors;

    if (isThereFormErrors) {
      return yield put(onClickLoginFinished(formErrors));
    } else {
      const apiUrl = createApiUrl({
        url: "superadmin/login",
      });

      let response = yield postRequest(apiUrl, {
        username,
        password,
      });
      let result = yield response.json();

      console.log("response: ", response);
      console.log("result: ", result);
    }
  } catch (error) {
    console.log("Error in requestLogin => ", error);
  }
}

export default function* loginSaga() {
  yield all([takeLatest(ON_LOGIN, requestLogin)]);
}
