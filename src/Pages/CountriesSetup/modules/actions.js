import normalizer from "../utils/normalizer";
import {
  FETCH_COUNTRIES_SETUP_DATA,
  FETCH_COUNTRIES_SETUP_DATA_FINISHED,
  ON_SELECT_COUNTRIES_SETUP_ROW,
  ON_PRESS_COUNTRIES_SETUP_EDIT,
  ON_PRESS_COUNTRIES_SETUP_ADD,
  ON_PRESS_COUNTRIES_SETUP_CANCEL,
  ON_CHANGE_COUNTRIES_SETUP_RECORD_DATA,
  ON_REQUEST_DELETE_COUNTRIES_SETUP_RECORD,
  ON_REQUEST_DELETE_COUNTRIES_SETUP_RECORD_FINISHED,
  ON_REQUEST_INSERT_COUNTRIES_SETUP_RECORD,
  ON_REQUEST_INSERT_COUNTRIES_SETUP_RECORD_FINISHED,
  ON_REQUEST_UPDATE_COUNTRIES_SETUP_RECORD,
  ON_REQUEST_UPDATE_COUNTRIES_SETUP_RECORD_FINISHED,
  ON_SELECT_LAST_COLUMN_LANGUAGE_COUNTRIES_SETUP,
  ON_RESET_LAST_COLUMN_LANGUAGE_COUNTRIES_SETUP,
  ON_PRESS_SEARCH_COUNTRIES_SETUP,
  ON_PRESS_SEARCH_COUNTRIES_SETUP_FINISHED,
  ON_RESET_FILTER_COUNTRIES_SETUP,
} from "./types";

const reducerName = "countriesSetupReducer";
const rowKey = "idValue";

// Fetch initial data
export const fetchData = (sorter, filters) => ({
  type: FETCH_COUNTRIES_SETUP_DATA,
  reducerName,
  API_URL: "country",
  sorter,
  filters,
  finishedAction: fetchDataFinished,
});
export const fetchDataFinished = (result, isSorted, isFiltered) => ({
  type: FETCH_COUNTRIES_SETUP_DATA_FINISHED,
  data: result && result.data && normalizer(result.data),
  totalRecords: result.total,
  isSorted,
  isFiltered,
});

// On select record action
export const onSelectRecord = (id) => ({
  type: ON_SELECT_COUNTRIES_SETUP_ROW,
  id,
});

// On click add icon
export const onAddNewRecord = () => ({
  type: ON_PRESS_COUNTRIES_SETUP_ADD,
});

// Select row then click edit icon
export const onPressEdit = () => ({
  type: ON_PRESS_COUNTRIES_SETUP_EDIT,
});

// On click cancel icon
export const onPressCancel = () => ({
  type: ON_PRESS_COUNTRIES_SETUP_CANCEL,
});

// On change row input value
export const onChangeRowData = (inputData, key, { langCode }) => {
  return {
    type: ON_CHANGE_COUNTRIES_SETUP_RECORD_DATA,
    inputData,
    key,
    langCode,
  };
};

// On Add new record
export const requestInsertRecord = (recordData) => ({
  type: ON_REQUEST_INSERT_COUNTRIES_SETUP_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: "country",
  finishedAction: requestInsertRecordFinished,
});
export const requestInsertRecordFinished = (newState) => ({
  type: ON_REQUEST_INSERT_COUNTRIES_SETUP_RECORD_FINISHED,
  newState,
});

// On Update existing record
export const requestUpdateRecord = (recordData) => ({
  type: ON_REQUEST_UPDATE_COUNTRIES_SETUP_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: `country/${recordData.idValue}`,
  finishedAction: requestUpdateRecordFinished,
});
export const requestUpdateRecordFinished = (newState) => ({
  type: ON_REQUEST_UPDATE_COUNTRIES_SETUP_RECORD_FINISHED,
  newState,
});

// On Delete record
export const onDeleteRecord = (record) => ({
  type: ON_REQUEST_DELETE_COUNTRIES_SETUP_RECORD,
  record,
  reducerName,
  rowKey,
  API_URL: `country/${record._id}`,
  finishedAction: onDeleteRecordFinshed,
});
const onDeleteRecordFinshed = (newState) => ({
  type: ON_REQUEST_DELETE_COUNTRIES_SETUP_RECORD_FINISHED,
  newState,
});

// On press search button
export const onPressSearch = (filters) => ({
  type: ON_PRESS_SEARCH_COUNTRIES_SETUP,
  API_URL: "country",
  filters,
  finishedAction: onRequestSearchFinished,
});
export const onRequestSearchFinished = (result) => ({
  type: ON_PRESS_SEARCH_COUNTRIES_SETUP_FINISHED,
  data: result && normalizer(result),
});
export const resetFilter = () => ({
  type: ON_RESET_FILTER_COUNTRIES_SETUP,
});

// On Select last language column
export const onSelectLastColLang = (langCode, langLabel) => ({
  type: ON_SELECT_LAST_COLUMN_LANGUAGE_COUNTRIES_SETUP,
  langCode,
  dynamicColumn: {
    titleLabel: langLabel,
    width: "20%",
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
  type: ON_RESET_LAST_COLUMN_LANGUAGE_COUNTRIES_SETUP,
});
