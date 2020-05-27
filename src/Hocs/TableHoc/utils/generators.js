import { put, select } from "redux-saga/effects";
import notification from "antd/lib/notification";
import createApiUrl from "../../../utils/createApiUrl";
import {
  getRequest,
  postRequest,
  deleteRequest,
  patchRequest,
} from "../../../utils/httpRequests";
import getCodeError from "../../../utlities/oracle-Errors";
import deleteDsRow from "../../../utlities/deleteRow";
import strangeSelector from "../../../utils/selectStrangeReducer";
import getPropValues from "./getFileds";

export const loginSelector = ({ loginReducer }) => loginReducer.privData;

export const notifyProps = (error) => {
  let message = "Process Done Successfullly",
    description = "";
  if (error) {
    message = "Sorry, something went wrong";
    description = error;
  }
  return {
    message,
    description,
    duration: 3,
  };
};

// request initial table data
export function* requestTableData({
  reducerName,
  QUERY_URL,
  finishedAction,
  sorter,
}) {
  try {
    const { dataSource } = yield select(strangeSelector(reducerName));

    const apiUrl = createApiUrl({
      url: QUERY_URL,
      params: {
        poffset: dataSource ? dataSource.length : 0,
      },
    });
    const response = yield getRequest(apiUrl);
    const result = yield response.json();
    yield put(finishedAction(result, !!sorter));
  } catch (error) {
    console.log("fetching table data error =>", error);
    yield put(finishedAction());
  }
}

// search table data
export function* requestSearchTableData({
  QUERY_URL,
  finishedAction,
  reducerName,
  componentUsesHeaderSelect,
  headerSelectPropName,
  filters,
  addtionalParams,
}) {
  try {
    const {
      dbUser,
      authorization,
      [headerSelectPropName]: selectPropValue,
    } = yield select(loginSelector);
    const { [headerSelectPropName]: newSelectPropValue } = yield select(
      strangeSelector(reducerName)
    );
    if (Boolean(filters)) {
      const apiUrl = createApiUrl({
        userdb: dbUser,
        url: QUERY_URL,
        params: {
          ...filters,
          authorization,
          ...addtionalParams,
          poffset: 0,
          ...(componentUsesHeaderSelect
            ? { [headerSelectPropName]: newSelectPropValue || selectPropValue }
            : null),
        },
      });
      const response = yield get(apiUrl);
      const result = yield response.json();
      return yield put(finishedAction(result || componentUsesHeaderSelect));
    }
    yield put(finishedAction());
  } catch (error) {
    console.log("error searching tableData =>", error);
    yield put(finishedAction());
  }
}

// delete table record
export function* requestDeleteRecord({
  item,
  reducerName,
  rowKey,
  finishedAction,
  API_URL_ACTION,
  dataToUpdat,
  useDeleteMethod,
}) {
  try {
    const { dbUser, authorization, language_id } = yield select(loginSelector);
    const { dataSource } = yield select(strangeSelector(reducerName));
    const { isNew, [rowKey]: rowId, idValue, ...rest } = item;
    if (isNew) {
      const newDs = deleteDsRow(dataSource, rowId, rowKey);
      notification.open(notifyProps());
      return yield put(
        finishedAction({
          dataSource: newDs,
        })
      );
    }

    const url = createApiUrl({
      userdb: dbUser,
      url: API_URL_ACTION,
    });

    const deleteMethod = useDeleteMethod ? deleteReq : post;
    const response = yield deleteMethod(url, {
      authorization,
      data: dataToUpdat || [
        {
          [rowKey]: !!idValue ? idValue : rowId,
          ...rest,
          record_status: "d",
        },
      ],
    });

    const result = yield response.json();
    if (result && result.status === "failure") {
      let error;

      if (result.error_code) {
        error = getCodeError({
          errorCode: result.error_code,
          isRtl: language_id === 2,
        });
      }

      if (error) {
        notification.open(notifyProps(error));
        return yield put(finishedAction());
      }
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
    console.log("error deleting tableData row =>", error);
  }
}

// insert | update record data
export function* requestInsertUpdateRecord({
  recordData,
  rowKey,
  reducerName,
  API_URL_ACTION,
  finishedAction,
  dataToUpdate,
  swicthCallMethods,
  addtionalParamsFields,
}) {
  try {
    const { authorization, dbUser, language_id } = yield select(loginSelector);
    const { isNew, idValue, ...remainData } = recordData;
    const method = swicthCallMethods ? (isNew ? post : putReq) : post;

    const { dataSource, ...reducerValues } = yield select(
      strangeSelector(reducerName)
    );
    let addtionalParamsFieldsValues = null;
    if (addtionalParamsFields) {
      addtionalParamsFieldsValues = getPropValues(
        addtionalParamsFields,
        reducerValues
      );
    }

    const url = createApiUrl({
      userdb: dbUser,
      url: API_URL_ACTION,
    });
    const response = yield method(url, {
      authorization,
      ...addtionalParamsFieldsValues,
      data: dataToUpdate || [
        {
          ...remainData,
          ...(!!idValue ? { [rowKey]: idValue } : null),
          record_status: isNew ? "n" : "u",
        },
      ],
    });
    const result = yield response.json();

    // console.log("insert method: ", method);
    console.log("insert recordData: ", recordData);
    console.log("insert response: ", response);
    console.log("insert result: ", result);

    if (result && result.status === "failure") {
      let error;
      if (result.error_code) {
        error = getCodeError({
          errorCode: result.error_code,
          isRtl: language_id === 2,
        });
      }
      if (error) {
        console.log("fe error: ", error);
        notification.open(notifyProps(error));
      }
      return yield put(finishedAction());
    } else {
      notification.open(notifyProps());
      let ds = undefined;
      if (isNew) {
        const { dataSource } = yield select(strangeSelector(reducerName));
        ds = dataSource.map((item) => {
          const { isNew, record_status, ...otherData } = item;
          const isSameRow = item[rowKey] === recordData[rowKey];
          return isSameRow ? { ...otherData, record_status: "q" } : item;
        });
      }

      return yield put(
        finishedAction({
          isEditing: false,
          selectedRow: undefined,
          ...(ds ? { dataSource: ds } : null),
        })
      );
    }
  } catch (error) {
    console.log("error", error);
    yield put(finishedAction());
  }
}
