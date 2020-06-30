import normalizer from "../utils/normalizer";
import {
  FETCH_LANGUAGES_SETUP_DATA,
  FETCH_LANGUAGES_SETUP_DATA_FINISHED,
  ON_SELECT_LANGUAGES_SETUP_ROW,
  ON_PRESS_LANGUAGES_SETUP_EDIT,
  ON_PRESS_LANGUAGES_SETUP_ADD,
  ON_PRESS_LANGUAGES_SETUP_CANCEL,
  ON_CHANGE_LANGUAGES_SETUP_RECORD_DATA,
  ON_REQUEST_DELETE_LANGUAGES_SETUP_RECORD,
  ON_REQUEST_DELETE_LANGUAGES_SETUP_RECORD_FINISHED,
  ON_REQUEST_INSERT_LANGUAGES_SETUP_RECORD,
  ON_REQUEST_INSERT_LANGUAGES_SETUP_RECORD_FINISHED,
  ON_REQUEST_UPDATE_LANGUAGES_SETUP_RECORD,
  ON_REQUEST_UPDATE_LANGUAGES_SETUP_RECORD_FINISHED,
  ON_PRESS_SEARCH_LANGUAGES_SETUP,
  ON_PRESS_SEARCH_LANGUAGES_SETUP_FINISHED,
  ON_RESET_FILTER_LANGUAGES_SETUP,
} from "./types";

const reducerName = "languagesSetupReducer";
const rowKey = "idValue";

// Fetch initial data
export const fetchData = (sorter, filters) => ({
  type: FETCH_LANGUAGES_SETUP_DATA,
  reducerName,
  API_URL: "language",
  sorter,
  filters,
  finishedAction: fetchDataFinished,
});
export const fetchDataFinished = (result, isSorted, isFiltered) => ({
  type: FETCH_LANGUAGES_SETUP_DATA_FINISHED,
  data: result && result.data && normalizer(result.data),
  // data: result && result && normalizer(result),
  totalRecords: result.total,
  isSorted,
  isFiltered,
});

// On select record action
export const onSelectRecord = (id) => ({
  type: ON_SELECT_LANGUAGES_SETUP_ROW,
  id,
});

// On click add icon
export const onAddNewRecord = () => ({
  type: ON_PRESS_LANGUAGES_SETUP_ADD,
});

// Select row then click edit icon
export const onPressEdit = () => ({
  type: ON_PRESS_LANGUAGES_SETUP_EDIT,
});

// On click cancel icon
export const onPressCancel = () => ({
  type: ON_PRESS_LANGUAGES_SETUP_CANCEL,
});

// On change row input value
export const onChangeRowData = (inputData, key, { langCode }) => {
  return {
    type: ON_CHANGE_LANGUAGES_SETUP_RECORD_DATA,
    inputData,
    key,
    langCode,
  };
};

// On Add new record
export const requestInsertRecord = (recordData) => ({
  type: ON_REQUEST_INSERT_LANGUAGES_SETUP_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: "language",
  finishedAction: requestInsertRecordFinished,
});
export const requestInsertRecordFinished = (newState) => ({
  type: ON_REQUEST_INSERT_LANGUAGES_SETUP_RECORD_FINISHED,
  newState,
});

// On Update existing record
export const requestUpdateRecord = (recordData) => ({
  type: ON_REQUEST_UPDATE_LANGUAGES_SETUP_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: `language/${recordData.idValue}`,
  finishedAction: requestUpdateRecordFinished,
});
export const requestUpdateRecordFinished = (newState) => ({
  type: ON_REQUEST_UPDATE_LANGUAGES_SETUP_RECORD_FINISHED,
  newState,
});

// On Delete record
export const onDeleteRecord = (record) => ({
  type: ON_REQUEST_DELETE_LANGUAGES_SETUP_RECORD,
  record,
  reducerName,
  rowKey,
  API_URL: `language/${record._id}`,
  finishedAction: onDeleteRecordFinshed,
});
const onDeleteRecordFinshed = (newState) => ({
  type: ON_REQUEST_DELETE_LANGUAGES_SETUP_RECORD_FINISHED,
  newState,
});

// On press search button
export const onPressSearch = (filters) => ({
  type: ON_PRESS_SEARCH_LANGUAGES_SETUP,
  API_URL: "language",
  filters,
  finishedAction: onRequestSearchFinished,
});
export const onRequestSearchFinished = (result) => ({
  type: ON_PRESS_SEARCH_LANGUAGES_SETUP_FINISHED,
  data: result && normalizer(result),
});
export const resetFilter = () => ({
  type: ON_RESET_FILTER_LANGUAGES_SETUP,
});
