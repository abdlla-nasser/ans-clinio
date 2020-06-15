import { fork, all } from "redux-saga/effects";

import allergiesSetupSaga from "../../../Pages/AllergiesSetup/modules/saga";
import basePageSaga from "../../../Pages/BasePage/modules/saga";
import consultationSetupSaga from "../../../Pages/ConsultationSetup/modules/saga";
import insuranceCompaniesSetupSaga from "../../../Pages/InsuranceCompaniesSetup/modules/saga";
import labelsSaga from "../../../global/sagas/labels";
import loginSaga from "../../../Pages/Login/modules/saga";
import serviceGroupsSaga from "../../../Pages/ServiceGroups/modules/saga";

export default function* rootSaga() {
  yield all([fork(allergiesSetupSaga)]);
  yield all([fork(basePageSaga)]);
  yield all([fork(consultationSetupSaga)]);
  yield all([fork(insuranceCompaniesSetupSaga)]);
  yield all([fork(labelsSaga)]);
  yield all([fork(loginSaga)]);
  yield all([fork(serviceGroupsSaga)]);
}
