import normalizer from "../utils/normalizer";
import {
  FETCH_REGIONS_SETUP_DATA,
  FETCH_REGIONS_SETUP_DATA_FINISHED,
  ON_SELECT_REGIONS_SETUP_ROW,
  ON_PRESS_REGIONS_SETUP_EDIT,
  ON_PRESS_REGIONS_SETUP_ADD,
  ON_PRESS_REGIONS_SETUP_CANCEL,
  ON_CHANGE_REGIONS_SETUP_RECORD_DATA,
  ON_REQUEST_DELETE_REGIONS_SETUP_RECORD,
  ON_REQUEST_DELETE_REGIONS_SETUP_RECORD_FINISHED,
  ON_REQUEST_INSERT_REGIONS_SETUP_RECORD,
  ON_REQUEST_INSERT_REGIONS_SETUP_RECORD_FINISHED,
  ON_REQUEST_UPDATE_REGIONS_SETUP_RECORD,
  ON_REQUEST_UPDATE_REGIONS_SETUP_RECORD_FINISHED,
  ON_SELECT_LAST_COLUMN_LANGUAGE_REGIONS_SETUP,
  ON_RESET_LAST_COLUMN_LANGUAGE_REGIONS_SETUP,
  ON_PRESS_SEARCH_REGIONS_SETUP,
  ON_PRESS_SEARCH_REGIONS_SETUP_FINISHED,
  ON_RESET_FILTER_REGIONS_SETUP,
  FETCH_COUNTRY_LIST_REGIONS_SETUP,
  FETCH_COUNTRY_LIST_REGIONS_SETUP_FINISHED,
  ON_REGIONS_SETUP_FORM_CHANGED,
} from "./types";

const reducerName = "regionsSetupReducer";
const rowKey = "idValue";

// Fetch initial data
export const fetchData = (sorter, filters) => ({
  type: FETCH_REGIONS_SETUP_DATA,
  reducerName,
  API_URL: "regions",
  sorter,
  filters,
  finishedAction: fetchDataFinished,
  addtionalParamsFields: ["country"],
});
export const fetchDataFinished = (result, isSorted, isFiltered) => ({
  type: FETCH_REGIONS_SETUP_DATA_FINISHED,
  data: result && result.data && normalizer(result.data),
  totalRecords: result.total,
  isSorted,
  isFiltered,
});

// On select record action
export const onSelectRecord = (id) => ({
  type: ON_SELECT_REGIONS_SETUP_ROW,
  id,
});

// On click add icon
export const onAddNewRecord = () => ({
  type: ON_PRESS_REGIONS_SETUP_ADD,
});

// Select row then click edit icon
export const onPressEdit = () => ({
  type: ON_PRESS_REGIONS_SETUP_EDIT,
});

// On click cancel icon
export const onPressCancel = () => ({
  type: ON_PRESS_REGIONS_SETUP_CANCEL,
});

// On change row input value
export const onChangeRowData = (inputData, key, { langCode }) => {
  return {
    type: ON_CHANGE_REGIONS_SETUP_RECORD_DATA,
    inputData,
    key,
    langCode,
  };
};

// On Add new record
export const requestInsertRecord = (recordData) => ({
  type: ON_REQUEST_INSERT_REGIONS_SETUP_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: "regions",
  finishedAction: requestInsertRecordFinished,
});
export const requestInsertRecordFinished = (newState) => ({
  type: ON_REQUEST_INSERT_REGIONS_SETUP_RECORD_FINISHED,
  newState,
});

// On Update existing record
export const requestUpdateRecord = (recordData) => ({
  type: ON_REQUEST_UPDATE_REGIONS_SETUP_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: `regions/${recordData.idValue}`,
  finishedAction: requestUpdateRecordFinished,
});
export const requestUpdateRecordFinished = (newState) => ({
  type: ON_REQUEST_UPDATE_REGIONS_SETUP_RECORD_FINISHED,
  newState,
});

// On Delete record
export const onDeleteRecord = (record) => ({
  type: ON_REQUEST_DELETE_REGIONS_SETUP_RECORD,
  record,
  reducerName,
  rowKey,
  API_URL: `regions/${record._id}`,
  finishedAction: onDeleteRecordFinshed,
});
const onDeleteRecordFinshed = (newState) => ({
  type: ON_REQUEST_DELETE_REGIONS_SETUP_RECORD_FINISHED,
  newState,
});

// On press search button
export const onPressSearch = (filters) => ({
  type: ON_PRESS_SEARCH_REGIONS_SETUP,
  API_URL: "regions",
  filters,
  finishedAction: onRequestSearchFinished,
});
export const onRequestSearchFinished = (result) => ({
  type: ON_PRESS_SEARCH_REGIONS_SETUP_FINISHED,
  data: result && normalizer(result),
});
export const resetFilter = () => ({
  type: ON_RESET_FILTER_REGIONS_SETUP,
});

// On Select last language column
export const onSelectLastColLang = (langCode, langLabel) => ({
  type: ON_SELECT_LAST_COLUMN_LANGUAGE_REGIONS_SETUP,
  langCode,
  dynamicColumn: {
    titleLabel: langLabel,
    width: "30%",
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
  type: ON_RESET_LAST_COLUMN_LANGUAGE_REGIONS_SETUP,
});

//----------------------------- CUSTOM ACTIONS -----------------------------

export const onFormChange = ({ key, value }) => ({
  type: ON_REGIONS_SETUP_FORM_CHANGED,
  key,
  value,
});

export const fetchCountryList = () => ({
  type: FETCH_COUNTRY_LIST_REGIONS_SETUP,
});
export const fetchCountryListFinished = (data) => ({
  type: FETCH_COUNTRY_LIST_REGIONS_SETUP_FINISHED,
  data,
});
