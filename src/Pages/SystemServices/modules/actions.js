import normalizer from "../utils/normalizer";
import {
  FETCH_SYSTEM_SERVICES_DATA,
  FETCH_SYSTEM_SERVICES_DATA_FINISHED,
  ON_SELECT_SYSTEM_SERVICES_ROW,
  ON_PRESS_SYSTEM_SERVICES_EDIT,
  ON_PRESS_SYSTEM_SERVICES_ADD,
  ON_PRESS_SYSTEM_SERVICES_CANCEL,
  ON_CHANGE_SYSTEM_SERVICES_RECORD_DATA,
  ON_REQUEST_DELETE_SYSTEM_SERVICES_RECORD,
  ON_REQUEST_DELETE_SYSTEM_SERVICES_RECORD_FINISHED,
  ON_REQUEST_INSERT_SYSTEM_SERVICES_RECORD,
  ON_REQUEST_INSERT_SYSTEM_SERVICES_RECORD_FINISHED,
  ON_REQUEST_UPDATE_SYSTEM_SERVICES_RECORD,
  ON_REQUEST_UPDATE_SYSTEM_SERVICES_RECORD_FINISHED,
  ON_SELECT_LAST_COLUMN_LANGUAGE_SYSTEM_SERVICES,
  ON_RESET_LAST_COLUMN_LANGUAGE_SYSTEM_SERVICES,
  ON_PRESS_SEARCH_SYSTEM_SERVICES,
  ON_PRESS_SEARCH_SYSTEM_SERVICES_FINISHED,
  ON_RESET_FILTER_SYSTEM_SERVICES,
  ON_SYSTEM_SERVICES_FORM_CHANGED,
  FETCH_COUNTRY_LIST_SYSTEM_SERVICES,
  FETCH_COUNTRY_LIST_SYSTEM_SERVICES_FINISHED,
  FETCH_SERVICE_GROUPS_LIST_SYSTEM_SERVICES,
  FETCH_SERVICE_GROUPS_LIST_SYSTEM_SERVICES_FINISHED,
} from "./types";

const reducerName = "systemServicesReducer";
const rowKey = "idValue";

// Fetch initial data
export const fetchData = (sorter, filters) => ({
  type: FETCH_SYSTEM_SERVICES_DATA,
  reducerName,
  API_URL: "services",
  sorter,
  filters,
  finishedAction: fetchDataFinished,
  addtionalParamsFields: ["country", "service_group"],
});
export const fetchDataFinished = (result, isSorted, isFiltered) => ({
  type: FETCH_SYSTEM_SERVICES_DATA_FINISHED,
  data: result && result.data && normalizer(result.data),
  // data: result && result && normalizer(result),
  totalRecords: result.total,
  isSorted,
  isFiltered,
});

// On select record action
export const onSelectRecord = (id) => ({
  type: ON_SELECT_SYSTEM_SERVICES_ROW,
  id,
});

// On click add icon
export const onAddNewRecord = () => ({
  type: ON_PRESS_SYSTEM_SERVICES_ADD,
});

// Select row then click edit icon
export const onPressEdit = () => ({
  type: ON_PRESS_SYSTEM_SERVICES_EDIT,
});

// On click cancel icon
export const onPressCancel = () => ({
  type: ON_PRESS_SYSTEM_SERVICES_CANCEL,
});

// On change row input value
export const onChangeRowData = (inputData, key, { langCode }) => {
  return {
    type: ON_CHANGE_SYSTEM_SERVICES_RECORD_DATA,
    inputData,
    key,
    langCode,
  };
};

// On Add new record
export const requestInsertRecord = (recordData) => ({
  type: ON_REQUEST_INSERT_SYSTEM_SERVICES_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: "services",
  finishedAction: requestInsertRecordFinished,
});
export const requestInsertRecordFinished = (newState) => ({
  type: ON_REQUEST_INSERT_SYSTEM_SERVICES_RECORD_FINISHED,
  newState,
});

// On Update existing record
export const requestUpdateRecord = (recordData) => ({
  type: ON_REQUEST_UPDATE_SYSTEM_SERVICES_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: `services/${recordData.idValue}`,
  finishedAction: requestUpdateRecordFinished,
});
export const requestUpdateRecordFinished = (newState) => ({
  type: ON_REQUEST_UPDATE_SYSTEM_SERVICES_RECORD_FINISHED,
  newState,
});

// On Delete record
export const onDeleteRecord = (record) => ({
  type: ON_REQUEST_DELETE_SYSTEM_SERVICES_RECORD,
  record,
  reducerName,
  rowKey,
  API_URL: `services/${record._id}`,
  finishedAction: onDeleteRecordFinshed,
});
const onDeleteRecordFinshed = (newState) => ({
  type: ON_REQUEST_DELETE_SYSTEM_SERVICES_RECORD_FINISHED,
  newState,
});

// On press search button
export const onPressSearch = (filters) => ({
  type: ON_PRESS_SEARCH_SYSTEM_SERVICES,
  API_URL: "services",
  filters,
  finishedAction: onRequestSearchFinished,
});
export const onRequestSearchFinished = (result) => ({
  type: ON_PRESS_SEARCH_SYSTEM_SERVICES_FINISHED,
  data: result && normalizer(result),
});
export const resetFilter = () => ({
  type: ON_RESET_FILTER_SYSTEM_SERVICES,
});

// On Select last language column
export const onSelectLastColLang = (langCode, langLabel) => ({
  type: ON_SELECT_LAST_COLUMN_LANGUAGE_SYSTEM_SERVICES,
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
  type: ON_RESET_LAST_COLUMN_LANGUAGE_SYSTEM_SERVICES,
});

//----------------------------- CUSTOM ACTIONS -----------------------------

export const onFormChange = ({ name, value }) => ({
  type: ON_SYSTEM_SERVICES_FORM_CHANGED,
  name,
  value,
});

export const fetchCountryList = () => ({
  type: FETCH_COUNTRY_LIST_SYSTEM_SERVICES,
});
export const fetchCountryListFinished = (data) => ({
  type: FETCH_COUNTRY_LIST_SYSTEM_SERVICES_FINISHED,
  data,
});

export const fetchServiceGroupsList = () => ({
  type: FETCH_SERVICE_GROUPS_LIST_SYSTEM_SERVICES,
});
export const fetchServiceGroupsListFinished = (data) => ({
  type: FETCH_SERVICE_GROUPS_LIST_SYSTEM_SERVICES_FINISHED,
  data,
});
