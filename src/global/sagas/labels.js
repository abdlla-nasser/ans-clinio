import { takeEvery, put, all } from "redux-saga/effects";
import { requestPageLabelsFinished } from "../actions/labels";
import { GET_PAGE_LABELS } from "../types/labels";
import { getRequest } from "../../utils/httpRequests";
import createApiUrl from "../../utils/createApiUrl";

function* requestPageLabels({ page, langCode }) {
  try {
    const apiUrl = createApiUrl({
      url: `PageLabels/${page}/${langCode}`,
    });
    let response = yield getRequest(apiUrl);
    response = yield response.json();
    const labelPageName = page + "Labels";

    yield put(
      requestPageLabelsFinished({
        [labelPageName]: response,
      })
    );
  } catch (error) {
    console.log("Error while requestPageLabels =>", error);
  }
}

export default function* labelsSaga() {
  yield all([takeEvery(GET_PAGE_LABELS, requestPageLabels)]);
}
