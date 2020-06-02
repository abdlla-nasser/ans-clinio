import initialRowData from "./rowProps";
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

const dummData = [
  {
    followup: true,
    _id: "5ed4d12348c39f0da42a6a8c",
    name: {
      en: "Normal consultation",
      ar: "كشف عادي",
      tr: "kashf 3ady",
    },
    createdAt: "2020-06-01T09:57:55.876Z",
    updatedAt: "2020-06-01T12:08:23.852Z",
    __v: 0,
  },
  {
    followup: false,
    _id: "5ed4d15548c39f0da42a6a8d",
    name: {
      en: "Follow Up",
      ar: "مراجعه",
      tr: "morag3a",
    },
    createdAt: "2020-06-01T09:58:45.769Z",
    updatedAt: "2020-06-01T12:13:06.498Z",
    __v: 0,
  },
  {
    followup: false,
    _id: "5ed4d1ac48c39f0da42a6a8e",
    name: {
      en: "Urgent consultation",
      ar: "كشف مستعجل",
      tr: "kashf mst3gl",
    },
    createdAt: "2020-06-01T10:00:12.855Z",
    updatedAt: "2020-06-01T10:00:12.855Z",
    __v: 0,
  },
];

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
        dataSource: [
          {
            _id: key,
            ...initialRowData,
          },
          ...ds,
        ],
      };

    case ON_PRESS_CONSULTATION_SETUP_EDIT:
      return {
        ...state,
        isEditing: true,
        isUpdatingRecord: true,
      };

    case ON_CHANGE_CONSULTATION_SETUP_RECORD_DATA:
      return {
        ...state,
        dataSource: state.dataSource.map((record) => {
          const isSameRow = record._id === action.key;
          return isSameRow ? { ...record, ...action.inputValue } : record;
        }),
      };

    case ON_PRESS_CONSULTATION_SETUP_CANCEL:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
