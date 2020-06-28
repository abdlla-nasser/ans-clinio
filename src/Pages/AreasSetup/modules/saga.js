import { takeLatest, all, select, put } from "redux-saga/effects";
import {
  requestTableData,
  requestInsertRecord,
  requestUpdateRecord,
  requestDeleteRequest,
  requestSearchTableData,
  appBaseLangSelector,
} from "../../../Hocs/TableHoc/utils/generators";

import createApiUrl from "../../../utils/createApiUrl";
import { getRequest } from "../../../utils/httpRequests";
import { fetchRegionsListFinished } from "../modules/actions";

import {
  FETCH_AREAS_SETUP_DATA,
  ON_REQUEST_DELETE_AREAS_SETUP_RECORD,
  ON_REQUEST_INSERT_AREAS_SETUP_RECORD,
  ON_REQUEST_UPDATE_AREAS_SETUP_RECORD,
  ON_PRESS_SEARCH_AREAS_SETUP,
  FETCH_REGIONS_LIST_AREAS_SETUP,
} from "./types";

function* requestRegionsList() {
  const { language_code } = yield select(appBaseLangSelector);
  try {
    const apiUrl = createApiUrl({
      url: "select/regions",
      params: {
        lang: language_code,
      },
    });
    let response = yield getRequest(apiUrl);
    response = yield response.json();

    yield put(fetchRegionsListFinished(response));
  } catch (error) {
    console.log("Error while fetching requestRegionsList => ", error);
    yield put(fetchRegionsListFinished());
  }
}

export default function* InsuranceCompaniesSetupSaga() {
  yield all([takeLatest(FETCH_AREAS_SETUP_DATA, requestTableData)]);
  yield all([
    takeLatest(ON_REQUEST_UPDATE_AREAS_SETUP_RECORD, requestUpdateRecord),
  ]);
  yield all([
    takeLatest(ON_REQUEST_INSERT_AREAS_SETUP_RECORD, requestInsertRecord),
  ]);
  yield all([
    takeLatest(ON_REQUEST_DELETE_AREAS_SETUP_RECORD, requestDeleteRequest),
  ]);
  yield all([takeLatest(ON_PRESS_SEARCH_AREAS_SETUP, requestSearchTableData)]);
  yield all([takeLatest(FETCH_REGIONS_LIST_AREAS_SETUP, requestRegionsList)]);
}
