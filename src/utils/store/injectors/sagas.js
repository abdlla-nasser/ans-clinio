import { fork, all } from "redux-saga/effects";

import allergiesSetupSaga from "../../../Pages/AllergiesSetup/modules/saga";
import basePageSaga from "../../../Pages/BasePage/modules/saga";
import consultationSetupSaga from "../../../Pages/ConsultationSetup/modules/saga";
import countriesSetupSaga from "../../../Pages/CountriesSetup/modules/saga";
import insuranceCompaniesSetupSaga from "../../../Pages/InsuranceCompaniesSetup/modules/saga";
import labelsSaga from "../../../global/sagas/labels";
import loginSaga from "../../../Pages/Login/modules/saga";
import serviceGroupsSaga from "../../../Pages/ServiceGroups/modules/saga";
import regionsSetupSaga from "../../../Pages/RegionsSetup/modules/saga";
import areasSetupSaga from "../../../Pages/AreasSetup/modules/saga";
import systemServicesSaga from "../../../Pages/SystemServices/modules/saga";
import medicationsSetupSaga from "../../../Pages/MedicationsSetup/modules/saga";
import languagesSetupSaga from "../../../Pages/LanguagesSetup/modules/saga";

export default function* rootSaga() {
  yield all([fork(allergiesSetupSaga)]);
  yield all([fork(basePageSaga)]);
  yield all([fork(consultationSetupSaga)]);
  yield all([fork(countriesSetupSaga)]);
  yield all([fork(insuranceCompaniesSetupSaga)]);
  yield all([fork(labelsSaga)]);
  yield all([fork(loginSaga)]);
  yield all([fork(serviceGroupsSaga)]);
  yield all([fork(regionsSetupSaga)]);
  yield all([fork(areasSetupSaga)]);
  yield all([fork(systemServicesSaga)]);
  yield all([fork(medicationsSetupSaga)]);
  yield all([fork(languagesSetupSaga)]);
}
