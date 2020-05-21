import { takeEvery, put, all, select } from "redux-saga/effects";
import { requestPageLabelsFinished } from "../actions/labels";
import { GET_PAGE_LABELS } from "../types/labels";
import { getRequest } from "../../utils/httpRequests";
import createApiUrl from "../../utils/createApiUrl";

function* requestPageLabels({ page, langCode }) {
  console.log("got into requestPageLabels");
  try {
    const apiUrl = createApiUrl({
      url: `PageLabels/${page}/${langCode}`,
    });
    const response = yield getRequest(apiUrl);
    const result = yield response.json();

    console.log("requestPageLabels response: ", response);
    console.log("requestPageLabels result: ", result);
    const labelPageName = page + "Labels";

    yield put(
      requestPageLabelsFinished({
        [labelPageName]: result,
      })
    );
  } catch (error) {
    console.log("Error while requestPageLabels =>", error);
  }
}

export default function* labelsSaga() {
  yield all([takeEvery(GET_PAGE_LABELS, requestPageLabels)]);
}
