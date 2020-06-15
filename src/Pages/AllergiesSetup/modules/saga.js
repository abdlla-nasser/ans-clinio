import { takeLatest, all } from "redux-saga/effects";
import {
  requestInsertRecord,
  requestTableData,
  requestUpdateRecord,
  requestDeleteRequest,
  requestSearchTableData,
} from "../../../Hocs/TableHoc/utils/generators";

import {
  FETCH_ALLERGIES_SETUP_DATA,
  ON_REQUEST_DELETE_ALLERGIES_SETUP_RECORD,
  ON_REQUEST_INSERT_ALLERGIES_SETUP_RECORD,
  ON_REQUEST_UPDATE_ALLERGIES_SETUP_RECORD,
  ON_PRESS_SEARCH_ALLERGIES_SETUP,
} from "./types";

export default function* InsuranceCompaniesSetupSaga() {
  yield all([takeLatest(FETCH_ALLERGIES_SETUP_DATA, requestTableData)]);
  yield all([
    takeLatest(ON_REQUEST_UPDATE_ALLERGIES_SETUP_RECORD, requestUpdateRecord),
  ]);
  yield all([
    takeLatest(ON_REQUEST_INSERT_ALLERGIES_SETUP_RECORD, requestInsertRecord),
  ]);
  yield all([
    takeLatest(ON_REQUEST_DELETE_ALLERGIES_SETUP_RECORD, requestDeleteRequest),
  ]);
  yield all([
    takeLatest(ON_PRESS_SEARCH_ALLERGIES_SETUP, requestSearchTableData),
  ]);
}
