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
// import getPropValues from "./getFields";

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
    notifyUserError();
    console.log("Fetching table data error => ", error);
    yield put(finishedAction());
  }
}

// Request Insert Record
export function* requestInsertRecord({
  recordData,
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
      dataSource.shift();
      const { _id } = result;
      const newRecord = {
        idValue: _id,
        ...result,
      };
      const newDs = [newRecord, ...dataSource];

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
  reducerName,
  API_URL,
  finishedAction,
}) {
  try {
    const {
      idValue,
      _id,
      createdAt,
      updatedAt,
      __v,
      ...otherRecordData
    } = recordData;

    const apiUrl = createApiUrl({
      url: API_URL,
    });
    const response = yield patchRequest(apiUrl, {
      ...otherRecordData,
    });
    const result = yield response.json();

    if (response && response.status !== 200) {
      notifyUserError();
      return yield put(finishedAction());
    } else {
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
