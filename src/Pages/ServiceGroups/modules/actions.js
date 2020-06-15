import normalizer from "../utils/normalizer";
import {
  FETCH_SERVICE_GROUPS_DATA,
  FETCH_SERVICE_GROUPS_DATA_FINISHED,
  ON_SELECT_SERVICE_GROUPS_ROW,
  ON_PRESS_SERVICE_GROUPS_EDIT,
  ON_PRESS_SERVICE_GROUPS_ADD,
  ON_PRESS_SERVICE_GROUPS_CANCEL,
  ON_CHANGE_SERVICE_GROUPS_RECORD_DATA,
  ON_REQUEST_DELETE_SERVICE_GROUPS_RECORD,
  ON_REQUEST_DELETE_SERVICE_GROUPS_RECORD_FINISHED,
  ON_REQUEST_INSERT_SERVICE_GROUPS_RECORD,
  ON_REQUEST_INSERT_SERVICE_GROUPS_RECORD_FINISHED,
  ON_REQUEST_UPDATE_SERVICE_GROUPS_RECORD,
  ON_REQUEST_UPDATE_SERVICE_GROUPS_RECORD_FINISHED,
  ON_SELECT_LAST_COLUMN_LANGUAGE_SERVICE_GROUPS,
  ON_RESET_LAST_COLUMN_LANGUAGE_SERVICE_GROUPS,
  ON_PRESS_SEARCH_SERVICE_GROUPS,
  ON_PRESS_SEARCH_SERVICE_GROUPS_FINISHED,
  ON_RESET_FILTER_SERVICE_GROUPS,
} from "./types";

const reducerName = "serviceGroupsReducer";
const rowKey = "idValue";

// Fetch initial data
export const fetchData = (sorter, filters) => ({
  type: FETCH_SERVICE_GROUPS_DATA,
  reducerName,
  API_URL: "ServiceGroups",
  sorter,
  filters,
  finishedAction: fetchDataFinished,
});
export const fetchDataFinished = (result, isSorted, isFiltered) => ({
  type: FETCH_SERVICE_GROUPS_DATA_FINISHED,
  data: result && result.data && normalizer(result.data),
  totalRecords: result.total,
  isSorted,
  isFiltered,
});

// On select record action
export const onSelectRecord = (id) => ({
  type: ON_SELECT_SERVICE_GROUPS_ROW,
  id,
});

// On click add icon
export const onAddNewRecord = () => ({
  type: ON_PRESS_SERVICE_GROUPS_ADD,
});

// Select row then click edit icon
export const onPressEdit = () => ({
  type: ON_PRESS_SERVICE_GROUPS_EDIT,
});

// On click cancel icon
export const onPressCancel = () => ({
  type: ON_PRESS_SERVICE_GROUPS_CANCEL,
});

// On change row input value
export const onChangeRowData = (inputData, key, { langCode }) => {
  return {
    type: ON_CHANGE_SERVICE_GROUPS_RECORD_DATA,
    inputData,
    key,
    langCode,
  };
};

// On Add new record
export const requestInsertRecord = (recordData) => ({
  type: ON_REQUEST_INSERT_SERVICE_GROUPS_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: "ServiceGroups",
  finishedAction: requestInsertRecordFinished,
});
export const requestInsertRecordFinished = (newState) => ({
  type: ON_REQUEST_INSERT_SERVICE_GROUPS_RECORD_FINISHED,
  newState,
});

// On Update existing record
export const requestUpdateRecord = (recordData) => ({
  type: ON_REQUEST_UPDATE_SERVICE_GROUPS_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: `ServiceGroups/${recordData.idValue}`,
  finishedAction: requestUpdateRecordFinished,
});
export const requestUpdateRecordFinished = (newState) => ({
  type: ON_REQUEST_UPDATE_SERVICE_GROUPS_RECORD_FINISHED,
  newState,
});

// On Delete record
export const onDeleteRecord = (record) => ({
  type: ON_REQUEST_DELETE_SERVICE_GROUPS_RECORD,
  record,
  reducerName,
  rowKey,
  API_URL: `ServiceGroups/${record._id}`,
  finishedAction: onDeleteRecordFinshed,
});
const onDeleteRecordFinshed = (newState) => ({
  type: ON_REQUEST_DELETE_SERVICE_GROUPS_RECORD_FINISHED,
  newState,
});

// On press search button
export const onPressSearch = (filters) => ({
  type: ON_PRESS_SEARCH_SERVICE_GROUPS,
  API_URL: "ServiceGroups",
  filters,
  finishedAction: onRequestSearchFinished,
});
export const onRequestSearchFinished = (result) => ({
  type: ON_PRESS_SEARCH_SERVICE_GROUPS_FINISHED,
  data: result && normalizer(result),
});
export const resetFilter = () => ({
  type: ON_RESET_FILTER_SERVICE_GROUPS,
});

// On Select last language column
export const onSelectLastColLang = (langCode, langLabel) => ({
  type: ON_SELECT_LAST_COLUMN_LANGUAGE_SERVICE_GROUPS,
  langCode,
  dynamicColumn: {
    titleLabel: langLabel,
    width: 120,
    renderView: {
      type: "text",
      renderCell: {
        dIdxs: "name",
        langCode: langCode,
        getDeepValueInSingleDIndx: ({ values }) => ({
          val: values[langCode],
        }),
      },
    },
  },
  excelColumn: { label: langLabel, value: langCode },
});
export const resetColValue = () => ({
  type: ON_RESET_LAST_COLUMN_LANGUAGE_SERVICE_GROUPS,
});
