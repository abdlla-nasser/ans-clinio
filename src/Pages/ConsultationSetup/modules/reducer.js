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

import dummyData from "./dummyData";

const initialState = {
  loading: false,
  isActionLoading: false,
  selectedRow: undefined,
  isEditing: false,
  dataSource: dummyData,
  lastColLang: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_LAST_COLUMN_LANGUAGE":
      return {
        ...state,
        lastColLang: action.key,
      };

    default:
      return state;
  }
};
