import { put, select } from "redux-saga/effects";
import notification from "antd/lib/notification";
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
import { isCompositeComponentWithType } from "react-dom/test-utils";

export const appBaseSelector = ({ appBaseReducer }) => appBaseReducer;

export const notifyProps = (error) => {
  let message = "Process Done Successfullly",
    description = "";
  if (error) {
    message = "Something went wrong";
    description = error;
  }
  return {
    message,
    description,
    duration: 3,
  };
};

// Request Initial Table Data
export function* requestTableData({
  reducerName,
  API_URL,
  sorter,
  finishedAction,
  addtionalParams = null,
}) {
  try {
    // const { token } = yield select(appBaseSelector);
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
// export function* requestInsertRecord({
//   recordData,
//   rowKey,
//   reducerName,
//   API_URL,
//   finishedAction,
// }) {
//   try {
//     const { token } = yield select(appBaseSelector);
//     const { idValue, ...remainData } = recordData;
//     const { dataSource } = yield select(strangeSelector(reducerName));

//     const apiUrl = createApiUrl({
//       url: API_URL,
//     });
//     const response = yield postRequest(apiUrl, {
//       data: { ...remainData, ...(!!idValue ? { [rowKey]: idValue } : null) },
//     });
//     const result = yield response.json();
//     console.log("Insert result is: ", result);
//   } catch (error) {
//     console.log("Inserting table data error => ", error);
//     yield put(finishedAction());
//   }
// }

// Request Update Record
// export function* requestUpdateRecord({
//   recordData,
//   rowKey,
//   reducerName,
//   API_URL,
//   finishedAction,
// }) {
//   try {
//     const { token } = yield select(appBaseSelector);
//     const { idValue, ...remainData } = recordData;
//     const { dataSource } = yield select(strangeSelector(reducerName));

//     const apiUrl = createApiUrl({
//       url: API_URL,
//     });
//     const response = yield patchRequest(apiUrl, {
//       data: { ...remainData, ...(!!idValue ? { [rowKey]: idValue } : null) },
//     });
//     const result = yield response.json();
//     console.log("Insert result is: ", result);
//     return yield put(
//       finishedAction({
//         isEditing: false,
//         selectedRow: undefined,
//         ...(ds ? { dataSource: ds } : null),
//       })
//     );
//   } catch (error) {
//     console.log("Inserting table data error => ", error);
//     yield put(finishedAction());
//   }
// }

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
      notification.open(notifyProps());
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
      let error;
      notification.open(notifyProps(error));
      return yield put(finishedAction());
    } else {
      const newDs = deleteDsRow(dataSource, rowId, rowKey);
      notification.open(notifyProps());
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
