import {
  FETCH_CONSULTATION_SETUP_DATA,
  FETCH_CONSULTATION_SETUP_DATA_FINISHED,
  ON_SELECT_CONSULTATION_SETUP_ROW,
  ON_PRESS_CONSULTATION_SETUP_EDIT,
  ON_PRESS_CONSULTATION_SETUP_ADD,
  ON_CHANGE_CONSULTATION_SETUP_RECORD_DATA,
  ON_REQUEST_DELETE_CONSULTATION_SETUP_RECORD,
  ON_REQUEST_INSERT_UPDATE_CONSULTATION_SETUP_RECORD,
  ON_REQUEST_INSERT_UPDATE_CONSULTATION_SETUP_RECORD_FINISHED,
} from "./types";

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

// On change row input value
export const onChangeRowData = (inputValue, key) => ({
  type: ON_CHANGE_CONSULTATION_SETUP_RECORD_DATA,
  inputValue,
  key,
});
