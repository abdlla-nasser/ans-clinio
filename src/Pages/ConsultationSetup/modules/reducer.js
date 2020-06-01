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
  ON_PRESS_CONSULTATION_SETUP_CANCEL,
} from "./types";

import dummyData from "./dummyData";

const initialState = {
  loading: false,
  isActionLoading: false,
  selectedRow: undefined,
  isEditing: false,
  isAddingRecord: false,
  isUpdatingRecord: false,
  dataSource: undefined,
  lastColLang: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_LAST_COLUMN_LANGUAGE":
      return {
        ...state,
        lastColLang: action.key,
      };

    case FETCH_CONSULTATION_SETUP_DATA:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CONSULTATION_SETUP_DATA_FINISHED:
      const newDs = action.data || [];
      return {
        ...state,
        // dataSource: action.isSorting ? newDs : [...(state.dataSource || []), ...newDs],
        dataSource: newDs,
        loading: false,
      };

    case ON_SELECT_CONSULTATION_SETUP_ROW:
      return {
        ...state,
        selectedRow: action.id,
      };

    case ON_PRESS_CONSULTATION_SETUP_ADD:
      const ds = state.dataSource;
      const key = ds.length + 1;
      return {
        ...state,
        isEditing: true,
        isAddingRecord: true,
        selectedRow: key,
      };

    case ON_PRESS_CONSULTATION_SETUP_EDIT:
      return {
        ...state,
        isEditing: true,
        isUpdatingRecord: true,
      };

    case ON_PRESS_CONSULTATION_SETUP_CANCEL:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
