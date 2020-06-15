import { takeLatest, all } from "redux-saga/effects";
import {
  requestInsertRecord,
  requestTableData,
  requestUpdateRecord,
  requestDeleteRequest,
  requestSearchTableData,
} from "../../../Hocs/TableHoc/utils/generators";

import {
  FETCH_SERVICE_GROUPS_DATA,
  ON_REQUEST_DELETE_SERVICE_GROUPS_RECORD,
  ON_REQUEST_INSERT_SERVICE_GROUPS_RECORD,
  ON_REQUEST_UPDATE_SERVICE_GROUPS_RECORD,
  ON_PRESS_SEARCH_SERVICE_GROUPS,
} from "./types";

export default function* InsuranceCompaniesSetupSaga() {
  yield all([takeLatest(FETCH_SERVICE_GROUPS_DATA, requestTableData)]);
  yield all([
    takeLatest(ON_REQUEST_UPDATE_SERVICE_GROUPS_RECORD, requestUpdateRecord),
  ]);
  yield all([
    takeLatest(ON_REQUEST_INSERT_SERVICE_GROUPS_RECORD, requestInsertRecord),
  ]);
  yield all([
    takeLatest(ON_REQUEST_DELETE_SERVICE_GROUPS_RECORD, requestDeleteRequest),
  ]);
  yield all([
    takeLatest(ON_PRESS_SEARCH_SERVICE_GROUPS, requestSearchTableData),
  ]);
}
