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
import { fetchSpecialityListFinished } from "../modules/actions";

import {
  FETCH_SERVICE_GROUPS_DATA,
  ON_REQUEST_DELETE_SERVICE_GROUPS_RECORD,
  ON_REQUEST_INSERT_SERVICE_GROUPS_RECORD,
  ON_REQUEST_UPDATE_SERVICE_GROUPS_RECORD,
  ON_PRESS_SEARCH_SERVICE_GROUPS,
  FETCH_SPECIALITY_LIST_SERVICE_GROUPS,
} from "./types";

function* requestSpecialityList() {
  const { language_code } = yield select(appBaseLangSelector);
  try {
    const apiUrl = createApiUrl({
      url: "select/Speciality",
      params: {
        lang: language_code,
      },
    });
    let response = yield getRequest(apiUrl);
    response = yield response.json();

    yield put(fetchSpecialityListFinished(response));
  } catch (error) {
    console.log("Error while fetching requestSpecialityList => ", error);
    yield put(fetchSpecialityListFinished());
  }
}

export default function* () {
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
  yield all([
    takeLatest(FETCH_SPECIALITY_LIST_SERVICE_GROUPS, requestSpecialityList),
  ]);
}
