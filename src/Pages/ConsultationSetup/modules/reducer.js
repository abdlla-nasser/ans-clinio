import initialRowData from "./rowProps";
import idGenerator from "../../../utils/idGenerator";
import {
  FETCH_CONSULTATION_SETUP_DATA,
  FETCH_CONSULTATION_SETUP_DATA_FINISHED,
  ON_SELECT_CONSULTATION_SETUP_ROW,
  ON_PRESS_CONSULTATION_SETUP_EDIT,
  ON_PRESS_CONSULTATION_SETUP_ADD,
  ON_CHANGE_CONSULTATION_SETUP_RECORD_DATA,
  ON_REQUEST_DELETE_CONSULTATION_SETUP_RECORD,
  ON_REQUEST_DELETE_CONSULTATION_SETUP_RECORD_FINISHED,
  ON_PRESS_CONSULTATION_SETUP_CANCEL,
} from "./types";

const dummData = [
  {
    followup: true,
    _id: "5ed4d12348c39f0da42a6a8c",
    idValue: "5ed4d12348c39f0da42a6a8c",
    player: "Messi",
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
    idValue: "5ed4d15548c39f0da42a6a8d",
    player: "Villa",
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
    idValue: "5ed4d1ac48c39f0da42a6a8e",
    player: "Suarez",
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
  dataSource: dummData,
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
      const recordKey = idGenerator();
      return {
        ...state,
        isEditing: true,
        isAddingRecord: true,
        selectedRow: recordKey,
        dataSource: [
          {
            idValue: recordKey,
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
      const { inputData, key, langCode } = action;
      const { langCode: sara } = langCode;
      const name = Object.keys(inputData)[0];
      const value = inputData[name];

      // console.log("sara:: ", sara);
      return {
        ...state,
        dataSource: state.dataSource.map((rec) => {
          const isSameRow = rec.idValue === key;
          return isSameRow
            ? langCode
              ? { ...rec, [name]: { ...rec[name], [sara]: value } }
              : { ...rec, [name]: value }
            : rec;
        }),
      };

    case ON_PRESS_CONSULTATION_SETUP_CANCEL:
      return {
        ...initialState,
      };

    case ON_REQUEST_DELETE_CONSULTATION_SETUP_RECORD:
      const { idValue } = action.record;
      return {
        ...state,
        isEditing: false,
        isActionLoading: true,
        selectedRow: idValue,
      };

    case ON_REQUEST_DELETE_CONSULTATION_SETUP_RECORD_FINISHED:
      return {
        ...state,
        isActionLoading: false,
        selectedRow: undefined,
        ...action.newState,
      };

    default:
      return state;
  }
};
