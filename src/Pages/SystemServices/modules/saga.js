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
  fetchServiceGroupsListFinished,
} from "../modules/actions";

import {
  FETCH_SYSTEM_SERVICES_DATA,
  ON_REQUEST_DELETE_SYSTEM_SERVICES_RECORD,
  ON_REQUEST_INSERT_SYSTEM_SERVICES_RECORD,
  ON_REQUEST_UPDATE_SYSTEM_SERVICES_RECORD,
  ON_PRESS_SEARCH_SYSTEM_SERVICES,
  FETCH_COUNTRY_LIST_SYSTEM_SERVICES,
  FETCH_SERVICE_GROUPS_LIST_SYSTEM_SERVICES,
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

// {{url}}/select/ServiceGroups?lang=en
function* requestServiceGroupsList() {
  const { language_code } = yield select(appBaseLangSelector);
  try {
    const apiUrl = createApiUrl({
      url: "select/ServiceGroups",
      params: {
        lang: language_code,
      },
    });
    let response = yield getRequest(apiUrl);
    response = yield response.json();

    yield put(fetchServiceGroupsListFinished(response));
  } catch (error) {
    console.log("Error while fetching requestServiceGroupsList => ", error);
    yield put(fetchServiceGroupsListFinished());
  }
}

export default function* () {
  yield all([takeLatest(FETCH_SYSTEM_SERVICES_DATA, requestTableData)]);
  yield all([
    takeLatest(ON_REQUEST_UPDATE_SYSTEM_SERVICES_RECORD, requestUpdateRecord),
  ]);
  yield all([
    takeLatest(ON_REQUEST_INSERT_SYSTEM_SERVICES_RECORD, requestInsertRecord),
  ]);
  yield all([
    takeLatest(ON_REQUEST_DELETE_SYSTEM_SERVICES_RECORD, requestDeleteRequest),
  ]);
  yield all([
    takeLatest(ON_PRESS_SEARCH_SYSTEM_SERVICES, requestSearchTableData),
  ]);
  yield all([
    takeLatest(FETCH_COUNTRY_LIST_SYSTEM_SERVICES, requestCountryList),
  ]);
  yield all([
    takeLatest(
      FETCH_SERVICE_GROUPS_LIST_SYSTEM_SERVICES,
      requestServiceGroupsList
    ),
  ]);
}
