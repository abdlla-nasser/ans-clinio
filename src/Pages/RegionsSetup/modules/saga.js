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
import {
  fetchCountryListFinished,
  fetchDataFinished,
} from "../modules/actions";

import {
  FETCH_REGIONS_SETUP_DATA,
  ON_REQUEST_DELETE_REGIONS_SETUP_RECORD,
  ON_REQUEST_INSERT_REGIONS_SETUP_RECORD,
  ON_REQUEST_UPDATE_REGIONS_SETUP_RECORD,
  ON_PRESS_SEARCH_REGIONS_SETUP,
  FETCH_COUNTRY_LIST_REGIONS_SETUP,
} from "./types";

const regionsSetupSelector = ({ regionsSetupReducer }) => regionsSetupReducer;

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

function* requestRegionsDataUponCountry({ sorter, filters }) {
  try {
    const { dataSource, country } = yield select(regionsSetupSelector);
    const { language_code } = yield select(appBaseLangSelector);

    const apiUrl = createApiUrl({
      url: "regions",
      params: {
        country: country,
        lang: language_code,
        poffset: dataSource && !sorter ? dataSource.length : 0,
        ...(sorter ? { orderby: sorter } : null),
        ...(filters ? filters : null),
      },
    });
    const response = yield getRequest(apiUrl);
    const result = yield response.json();

    yield put(fetchDataFinished(result, !!sorter, !!filters));
  } catch (error) {
    console.log("Fetching Regions data error => ", error);
    yield put(fetchDataFinished());
  }
}

export default function* InsuranceCompaniesSetupSaga() {
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
