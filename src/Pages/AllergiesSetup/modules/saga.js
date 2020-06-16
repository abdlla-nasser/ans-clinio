import { takeLatest, all, select, put } from "redux-saga/effects";
import {
  requestInsertRecord,
  requestTableData,
  requestUpdateRecord,
  requestDeleteRequest,
  requestSearchTableData,
  appBaseLangSelector,
} from "../../../Hocs/TableHoc/utils/generators";

import createApiUrl from "../../../utils/createApiUrl";
import { getRequest } from "../../../utils/httpRequests";
import { fetchTypeListFinished } from "../modules/actions";

import {
  FETCH_ALLERGIES_SETUP_DATA,
  ON_REQUEST_DELETE_ALLERGIES_SETUP_RECORD,
  ON_REQUEST_INSERT_ALLERGIES_SETUP_RECORD,
  ON_REQUEST_UPDATE_ALLERGIES_SETUP_RECORD,
  ON_PRESS_SEARCH_ALLERGIES_SETUP,
  FETCH_TYPE_LIST_ALLERGIES_SETUP,
} from "./types";

function* requestTypeList() {
  const { language_code } = yield select(appBaseLangSelector);
  try {
    const apiUrl = createApiUrl({
      url: "select/allergies",
      params: {
        lang: language_code,
      },
    });
    let response = yield getRequest(apiUrl);
    response = yield response.json();

    yield put(fetchTypeListFinished(response));
  } catch (error) {
    console.log("Error while fetching requestTypeList => ", error);
    yield put(fetchTypeListFinished());
  }
}

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
  yield all([takeLatest(FETCH_TYPE_LIST_ALLERGIES_SETUP, requestTypeList)]);
}
