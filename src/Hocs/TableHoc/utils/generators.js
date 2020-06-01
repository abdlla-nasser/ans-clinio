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
  console.log("got in requestTableData");
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

    console.log("apiUrl: ", apiUrl);
    console.log("response: ", response);
    console.log("result: ", result);

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
// export function* requestDeleteRequest({
//   item,
//   reducerName,
//   rowKey,
//   finishedAction,
//   API_URL,
// }) {
//   try {
//   } catch (error) {}
// }
