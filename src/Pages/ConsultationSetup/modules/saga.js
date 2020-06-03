import { takeLatest, all } from "redux-saga/effects";
import {
  requestTableData,
  requestDeleteRequest,
} from "../../../Hocs/TableHoc/utils/generators";

import {
  FETCH_CONSULTATION_SETUP_DATA,
  ON_REQUEST_DELETE_CONSULTATION_SETUP_RECORD,
} from "./types";

export default function* ConsultationSetupSaga() {
  yield all([takeLatest(FETCH_CONSULTATION_SETUP_DATA, requestTableData)]);
  yield all([
    takeLatest(
      ON_REQUEST_DELETE_CONSULTATION_SETUP_RECORD,
      requestDeleteRequest
    ),
  ]);
}
