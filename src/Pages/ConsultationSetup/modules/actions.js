import normalizer from "../utils/normalizer";
import {
  FETCH_CONSULTATION_SETUP_DATA,
  FETCH_CONSULTATION_SETUP_DATA_FINISHED,
  ON_SELECT_CONSULTATION_SETUP_ROW,
  ON_PRESS_CONSULTATION_SETUP_EDIT,
  ON_PRESS_CONSULTATION_SETUP_ADD,
  ON_PRESS_CONSULTATION_SETUP_CANCEL,
  ON_CHANGE_CONSULTATION_SETUP_RECORD_DATA,
  ON_REQUEST_DELETE_CONSULTATION_SETUP_RECORD,
  ON_REQUEST_DELETE_CONSULTATION_SETUP_RECORD_FINISHED,
  ON_REQUEST_INSERT_CONSULTATION_SETUP_RECORD,
  ON_REQUEST_INSERT_CONSULTATION_SETUP_RECORD_FINISHED,
  ON_REQUEST_UPDATE_CONSULTATION_SETUP_RECORD,
  ON_REQUEST_UPDATE_CONSULTATION_SETUP_RECORD_FINISHED,
  ON_SELECT_LAST_COLUMN_LANGUAGE_CONSULTATION_SETUP,
  ON_RESET_LAST_COLUMN_LANGUAGE_CONSULTATION_SETUP,
} from "./types";

const reducerName = "consultationSetupReducer";
const rowKey = "idValue";

// Fetch initial data
export const fetchData = (sorter) => ({
  type: FETCH_CONSULTATION_SETUP_DATA,
  reducerName,
  API_URL: "consultation",
  sorter,
  finishedAction: fetchDataFinished,
});
export const fetchDataFinished = (result, isSorting) => ({
  type: FETCH_CONSULTATION_SETUP_DATA_FINISHED,
  data: result && normalizer(result),
  isSorting,
});

// On select record action
export const onSelectRecord = (id) => ({
  type: ON_SELECT_CONSULTATION_SETUP_ROW,
  id,
});

// On click add icon
export const onAddNewRecord = () => ({
  type: ON_PRESS_CONSULTATION_SETUP_ADD,
});

// Select row then click edit icon
export const onPressEdit = () => ({
  type: ON_PRESS_CONSULTATION_SETUP_EDIT,
});

// On click cancel icon
export const onPressCancel = () => ({
  type: ON_PRESS_CONSULTATION_SETUP_CANCEL,
});

// On change row input value
export const onChangeRowData = (inputData, key, { langCode }) => {
  return {
    type: ON_CHANGE_CONSULTATION_SETUP_RECORD_DATA,
    inputData,
    key,
    langCode,
  };
};

// On Add new record
export const requestInsertRecord = (recordData) => ({
  type: ON_REQUEST_INSERT_CONSULTATION_SETUP_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: "consultation",
  finishedAction: requestInsertRecordFinished,
});
export const requestInsertRecordFinished = (newState) => ({
  type: ON_REQUEST_INSERT_CONSULTATION_SETUP_RECORD_FINISHED,
  newState,
});

// On Update existing record
export const requestUpdateRecord = (recordData) => ({
  type: ON_REQUEST_UPDATE_CONSULTATION_SETUP_RECORD,
  recordData,
  rowKey,
  reducerName,
  API_URL: `consultation/${recordData.idValue}`,
  finishedAction: requestUpdateRecordFinished,
});
export const requestUpdateRecordFinished = (newState) => ({
  type: ON_REQUEST_UPDATE_CONSULTATION_SETUP_RECORD_FINISHED,
  newState,
});

// On Delete record
export const onDeleteRecord = (record) => ({
  type: ON_REQUEST_DELETE_CONSULTATION_SETUP_RECORD,
  record,
  reducerName,
  rowKey,
  API_URL: `consultation/${record._id}`,
  finishedAction: onDeleteRecordFinshed,
});
const onDeleteRecordFinshed = (newState) => ({
  type: ON_REQUEST_DELETE_CONSULTATION_SETUP_RECORD_FINISHED,
  newState,
});

// On Select last language column
export const onSelectLastColLang = (langCode, langLabel) => ({
  type: ON_SELECT_LAST_COLUMN_LANGUAGE_CONSULTATION_SETUP,
  langCode,
  dynamicColumn: {
    titleLabel: langLabel,
    width: 120,
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "name",
        langCode: langCode,
        getDeepValueInSingleDIndx: ({ values }) => ({
          val: values[langCode],
        }),
      },
    },
  },
});
export const resetColValue = () => ({
  type: ON_RESET_LAST_COLUMN_LANGUAGE_CONSULTATION_SETUP,
});
