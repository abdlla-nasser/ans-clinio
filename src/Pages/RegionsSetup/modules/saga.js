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
import { fetchCountryListFinished } from "../modules/actions";

import {
  FETCH_REGIONS_SETUP_DATA,
  ON_REQUEST_DELETE_REGIONS_SETUP_RECORD,
  ON_REQUEST_INSERT_REGIONS_SETUP_RECORD,
  ON_REQUEST_UPDATE_REGIONS_SETUP_RECORD,
  ON_PRESS_SEARCH_REGIONS_SETUP,
  FETCH_COUNTRY_LIST_REGIONS_SETUP,
} from "./types";

function* requestCountryList() {
  const { language_code } = yield select(appBaseLangSelector);
  try {
    const apiUrl = createApiUrl({
      url: "select/country",
      params: {
        lang: language_code,
      },
    });
    let response = yield getRequest(apiUrl);
    response = yield response.json();

    yield put(fetchCountryListFinished(response));
  } catch (error) {
    console.log("Error while fetching requestCountryList => ", error);
    yield put(fetchCountryListFinished());
  }
}

export default function* () {
  yield all([takeLatest(FETCH_REGIONS_SETUP_DATA, requestTableData)]);
  yield all([
    takeLatest(ON_REQUEST_UPDATE_REGIONS_SETUP_RECORD, requestUpdateRecord),
  ]);
  yield all([
    takeLatest(ON_REQUEST_INSERT_REGIONS_SETUP_RECORD, requestInsertRecord),
  ]);
  yield all([
    takeLatest(ON_REQUEST_DELETE_REGIONS_SETUP_RECORD, requestDeleteRequest),
  ]);
  yield all([
    takeLatest(ON_PRESS_SEARCH_REGIONS_SETUP, requestSearchTableData),
  ]);
  yield all([takeLatest(FETCH_COUNTRY_LIST_REGIONS_SETUP, requestCountryList)]);
}
