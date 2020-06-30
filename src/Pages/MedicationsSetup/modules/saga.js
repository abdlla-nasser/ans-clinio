import { takeLatest, all } from "redux-saga/effects";
import {
  requestInsertRecord,
  requestTableData,
  requestUpdateRecord,
  requestDeleteRequest,
  requestSearchTableData,
} from "../../../Hocs/TableHoc/utils/generators";

import {
  FETCH_MEDICATIONS_SETUP_DATA,
  ON_REQUEST_DELETE_MEDICATIONS_SETUP_RECORD,
  ON_REQUEST_INSERT_MEDICATIONS_SETUP_RECORD,
  ON_REQUEST_UPDATE_MEDICATIONS_SETUP_RECORD,
  ON_PRESS_SEARCH_MEDICATIONS_SETUP,
} from "./types";

export default function* () {
  yield all([takeLatest(FETCH_MEDICATIONS_SETUP_DATA, requestTableData)]);
  yield all([
    takeLatest(ON_REQUEST_UPDATE_MEDICATIONS_SETUP_RECORD, requestUpdateRecord),
  ]);
  yield all([
    takeLatest(ON_REQUEST_INSERT_MEDICATIONS_SETUP_RECORD, requestInsertRecord),
  ]);
  yield all([
    takeLatest(
      ON_REQUEST_DELETE_MEDICATIONS_SETUP_RECORD,
      requestDeleteRequest
    ),
  ]);
  yield all([
    takeLatest(ON_PRESS_SEARCH_MEDICATIONS_SETUP, requestSearchTableData),
  ]);
}
