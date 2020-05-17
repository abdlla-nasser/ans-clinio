import { fork, all } from "redux-saga/effects";

import loginSaga from "../../../Pages/Login/modules/saga";

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
}
