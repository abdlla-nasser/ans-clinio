import { takeEvery, put, all } from "redux-saga/effects";
import { getRequest } from "../../../utils/httpRequests";
import createApiUrl from "../../../utils/createApiUrl";

import { getAppLanguagesFinished } from "./actions";
import { GET_LANGUAGES } from "./types";

function* requestAllLanguages() {
  try {
    const apiUrl = createApiUrl({
      url: "language",
    });
    let response = yield getRequest(apiUrl);
    response = yield response.json();

    yield put(getAppLanguagesFinished(response.data));
  } catch (error) {
    console.log("Error while requestAllLanguages =>", error);
    yield put(getAppLanguagesFinished());
  }
}

export default function* () {
  yield all([takeEvery(GET_LANGUAGES, requestAllLanguages)]);
}
