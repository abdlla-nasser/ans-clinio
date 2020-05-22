import { fork, all } from "redux-saga/effects";

import basePageSaga from "../../../Pages/BasePage/modules/saga";
import labelsSaga from "../../../global/sagas/labels";
import loginSaga from "../../../Pages/Login/modules/saga";

export default function* rootSaga() {
  yield all([fork(basePageSaga)]);
  yield all([fork(labelsSaga)]);
  yield all([fork(loginSaga)]);
}
