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
  filters,
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
        ...(filters ? filters : null),
      },
    });
    const response = yield getRequest(apiUrl);
    const result = yield response.json();

    if (dataSource.length > 0 && !sorter) {
      yield put(finishedAction());
    } else {
      yield put(finishedAction(result, !!sorter, !!filters));
    }

    // yield put(finishedAction(result, !!sorter, !!filters));
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
  rowKey,
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

    if (response && response.status !== 201) {
      const newDs = deleteDsRow(dataSource, idValue, rowKey);
      notifyUserError();
      return yield put(
        finishedAction({
          dataSource: newDs,
        })
      );
    } else {
      const datasource = deleteDsRow(dataSource, idValue, rowKey);
      const { _id } = result;
      const newRecord = {
        idValue: _id,
        ...result,
      };
      const newDs = [newRecord, ...datasource];

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
    // const result = yield response.json();

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
    const { isNew, [rowKey]: rowId } = record;

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

// Search Table Data
export function* requestSearchTableData({ API_URL, finishedAction, filters }) {
  try {
    if (Boolean(filters)) {
      const apiUrl = createApiUrl({
        url: API_URL,
        params: {
          ...filters,
        },
      });

      const response = yield getRequest(apiUrl);
      const result = yield response.json();

      console.log("search apiUrl: ", apiUrl);
      console.log("search response: ", response);
      console.log("search result: ", result);

      return yield put(finishedAction(result));
    }

    yield put(finishedAction());
  } catch (error) {
    console.log("Error while Searching Table Data => ", error);
    yield put(finishedAction());
  }
}
