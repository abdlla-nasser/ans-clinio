import { all, select, put, takeLatest } from "redux-saga/effects";
import createApiUrl from "../../../utils/createApiUrl";
import { postRequest } from "../../../utils/httpRequests";
import validateForm from "../utils/validation";

import { ON_LOGIN } from "./types";

import { onClickLoginFinished } from "./actions";

const loginSelector = ({ loginReducer }) => loginReducer;

// {
//     "data": {
//         "email": "staff3@staff3.com",
//         "password": "$2a$08$4sv0wR.7OwpzDFRtJkqo1O7jPeQLMhREwtgqErY0cInSbm88X13dW",
//         "Active_Flag": false,
//         "Role": "Staff",
//         "_id": "5ebbfb1bef9c150459d86489"
//     },
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWJiZmIxYmVmOWMxNTA0NTlkODY0ODkiLCJpYXQiOjE1ODk4MDM1OTN9.lXYlGaLh90RhXtvd3ZygkA6ZRxQT02DA2Y_53khJDR4"
// }

function* requestLogin({ navigateTo }) {
  try {
    const { username, password, formError } = yield select(loginSelector);

    const formErrors = validateForm({
      username,
      password,
    });

    const isThereFormErrors = !!formErrors;

    if (isThereFormErrors) {
      return yield put(onClickLoginFinished(formErrors));
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
        yield put(onClickLoginFinished({ formError: "Email does not exist" }));
      } else if (response === "incorrect_password") {
        yield put(onClickLoginFinished({ formError: "Incorrect password" }));
      } else {
        console.log("success!");
      }
    }
  } catch (error) {
    console.log("Error in requestLogin => ", error);
  }
}

export default function* loginSaga() {
  yield all([takeLatest(ON_LOGIN, requestLogin)]);
}
