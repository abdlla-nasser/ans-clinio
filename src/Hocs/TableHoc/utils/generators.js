import { put, select } from "redux-saga/effects";
import {
  notifyUserSuccess,
  notifyUserError,
} from "../../../utils/userNotification";
import createApiUrl from "../../../utils/createApiUrl";
import {
  getRequest,
  postRequest,
  deleteRequest,
  patchRequest,
} from "../../../utils/httpRequests";
import deleteDsRow from "../../../utils/deleteRow";
import strangeSelector from "../../../utils/selectStrangeReducer";
import getPropValues from "./getFields";

export const appBaseSelector = ({ appBaseReducer }) => appBaseReducer;

// Request Initial Table Data
export function* requestTableData({
  reducerName,
  API_URL,
  sorter,
  finishedAction,
  addtionalParams = null,
}) {
  try {
    const { dataSource } = yield select(strangeSelector(reducerName));

    const apiUrl = createApiUrl({
      url: API_URL,
      params: {
        ...addtionalParams,
        poffset: dataSource && !sorter ? dataSource.length : 0,
        ...(sorter ? { orderby: sorter } : null),
      },
    });
    const response = yield getRequest(apiUrl);
    const result = yield response.json();

    yield put(finishedAction(result));
  } catch (error) {
    console.log("Fetching table data error => ", error);
    yield put(finishedAction());
  }
}

// Request Insert Record
export function* requestInsertRecord({
  recordData,
  rowKey,
  reducerName,
  API_URL,
  finishedAction,
}) {
  try {
    const { idValue, isNew, ...otherRecordData } = recordData;
    const { dataSource } = yield select(strangeSelector(reducerName));

    const apiUrl = createApiUrl({
      url: API_URL,
    });
    const response = yield postRequest(apiUrl, {
      ...otherRecordData,
    });
    const result = yield response.json();

    console.log("insert response: ", response);
    console.log("insert result: ", result);

    if (response && response.status !== 201) {
      notifyUserError();
      return yield put(finishedAction());
    } else {
      console.log("rowKey: ", rowKey);
      const newDs = [result, ...dataSource];
      console.log("newDs: ", newDs);

      notifyUserSuccess();
      return yield put(
        finishedAction({
          dataSource: newDs,
        })
      );
    }
  } catch (error) {
    console.log("Inserting table data error => ", error);
    yield put(finishedAction());
  }
}

// Request Update Record
export function* requestUpdateRecord({
  recordData,
  rowKey,
  reducerName,
  API_URL,
  finishedAction,
}) {
  try {
    const { idValue, isNew, ...otherRecordData } = recordData;
    const { dataSource } = yield select(strangeSelector(reducerName));

    const apiUrl = createApiUrl({
      url: API_URL,
    });
    const response = yield patchRequest(apiUrl, {
      ...otherRecordData,
    });
    const result = yield response.json();

    console.log("patch response: ", response);
    console.log("patch result: ", result);

    if (response && response.status !== 200) {
      console.log("bad");
      notifyUserError();
      return yield put(finishedAction());
    } else {
      // console.log("good!");
      // const newDs = [result, ...dataSource];
      notifyUserSuccess();
      return yield put(finishedAction());
    }
  } catch (error) {
    console.log("Inserting table data error => ", error);
    yield put(finishedAction());
  }
}

// Request Delete Record
export function* requestDeleteRequest({
  record,
  reducerName,
  rowKey,
  API_URL,
  finishedAction,
}) {
  try {
    const { dataSource } = yield select(strangeSelector(reducerName));
    const { isNew, [rowKey]: rowId, idValue, ...rest } = record;

    if (isNew) {
      const newDs = deleteDsRow(dataSource, rowId, rowKey);
      notifyUserSuccess();
      return yield put(
        finishedAction({
          dataSource: newDs,
          isAddingRecord: false,
        })
      );
    }

    const apiUrl = createApiUrl({
      url: API_URL,
    });
    const response = yield deleteRequest(apiUrl);

    if (response && response.status !== 200) {
      notifyUserError();
      return yield put(finishedAction());
    } else {
      const newDs = deleteDsRow(dataSource, rowId, rowKey);
      notifyUserSuccess();
      return yield put(
        finishedAction({
          dataSource: newDs,
        })
      );
    }
  } catch (error) {
    yield put(finishedAction());
    console.log("Deleting table record error => ", error);
  }
}
