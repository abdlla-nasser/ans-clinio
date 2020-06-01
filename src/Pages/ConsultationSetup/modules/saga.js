import { takeLatest, all } from "redux-saga/effects";
import { requestTableData } from "../../../Hocs/TableHoc/utils/generators";

import { FETCH_CONSULTATION_SETUP_DATA } from "./types";

export default function* ConsultationSetupSaga() {
  yield all([takeLatest(FETCH_CONSULTATION_SETUP_DATA, requestTableData)]);
}
