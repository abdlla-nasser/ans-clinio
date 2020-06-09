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
  ON_REQUEST_INSERT_CONSULTATION_SETUP_RECORD,
  ON_REQUEST_INSERT_CONSULTATION_SETUP_RECORD_FINISHED,
  ON_REQUEST_UPDATE_CONSULTATION_SETUP_RECORD,
  ON_REQUEST_UPDATE_CONSULTATION_SETUP_RECORD_FINISHED,
  ON_SELECT_LAST_COLUMN_LANGUAGE_CONSULTATION_SETUP,
  ON_RESET_LAST_COLUMN_LANGUAGE_CONSULTATION_SETUP,
  ON_PRESS_SEARCH_CONSULTATION_SETUP,
  ON_PRESS_SEARCH_CONSULTATION_SETUP_FINISHED,
  ON_RESET_FILTER_CONSULTATION_SETUP,
} from "./types";

import { columns, excelColumns } from "../partials/columns";

const dummyData = [
  {
    followup: false,
    _id: "5eda8c5c4d02034b44363f8a",
    idValue: "5eda8c5c4d02034b44363f8a",
    name: {
      en: "English 1",
      ar: "Arabic 1",
      tr: "Turkish 1 test",
      es: "Spanish 1",
      it: "Italian 1",
      de: "German 1",
    },
    createdAt: "2020-06-05T18:18:04.337Z",
    updatedAt: "2020-06-08T19:29:06.772Z",
    __v: 0,
  },
  {
    followup: false,
    _id: "5eda8cae4d02034b44363f8b",
    idValue: "5eda8cae4d02034b44363f8b",
    name: {
      en: "English 2",
      ar: "Arabic 2",
      tr: "Turkish 2",
      es: "Spanish 2",
      it: "Italian 2",
      de: "German 2",
    },
    createdAt: "2020-06-05T18:19:26.201Z",
    updatedAt: "2020-06-05T18:19:26.201Z",
    __v: 0,
  },
  {
    followup: false,
    _id: "5eda8cd14d02034b44363f8c",
    idValue: "5eda8cd14d02034b44363f8c",
    name: {
      en: "English 3",
      ar: "Arabic 3",
      tr: "Turkish 3",
      es: "Spanish 3",
      it: "Italian 3",
      de: "German 3",
    },
    createdAt: "2020-06-05T18:20:01.580Z",
    updatedAt: "2020-06-05T18:20:01.580Z",
    __v: 0,
  },
  {
    followup: false,
    _id: "5eda8cdd4d02034b44363f8d",
    idValue: "5eda8cdd4d02034b44363f8d",
    name: {
      en: "English 4",
      ar: "Arabic 4",
      tr: "Turkish 4",
      es: "Spanish 4",
      it: "Italian 4",
      de: "German 4",
    },
    createdAt: "2020-06-05T18:20:13.618Z",
    updatedAt: "2020-06-05T18:20:13.618Z",
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
  dataSource: dummyData,
  stateColumns: columns,
  lastColLang: undefined,
  lastColLangList: [
    { key: "tr", value: "Turkish" },
    { key: "es", value: "Spanish" },
    { key: "it", value: "Italian" },
    { key: "de", value: "German" },
  ],
  stateExcelColumns: excelColumns,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_RESET_LAST_COLUMN_LANGUAGE_CONSULTATION_SETUP:
      return {
        ...state,
        stateColumns: columns,
        stateExcelColumns: excelColumns,
      };
    case ON_SELECT_LAST_COLUMN_LANGUAGE_CONSULTATION_SETUP:
      return {
        ...state,
        lastColLang: action.key,
        stateColumns: [...state.stateColumns, action.dynamicColumn],
        stateExcelColumns: [...state.stateExcelColumns, action.excelColumn],
      };

    case FETCH_CONSULTATION_SETUP_DATA:
    case ON_PRESS_SEARCH_CONSULTATION_SETUP:
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

    case ON_PRESS_SEARCH_CONSULTATION_SETUP_FINISHED:
      return {
        ...state,
        dataSource: action.data,
        loading: false,
      };

    case ON_RESET_FILTER_CONSULTATION_SETUP:
      return {
        ...state,
        dataSource: null,
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
            ...initialRowData,
            idValue: recordKey,
            isNew: true,
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
      const name = Object.keys(inputData)[0];
      const value = inputData[name];

      return {
        ...state,
        dataSource: state.dataSource.map((rec) => {
          const isSameRow = rec.idValue === key;
          return isSameRow
            ? langCode
              ? { ...rec, [name]: { ...rec[name], [langCode]: value } }
              : { ...rec, [name]: value }
            : rec;
        }),
      };

    case ON_REQUEST_INSERT_CONSULTATION_SETUP_RECORD:
    case ON_REQUEST_UPDATE_CONSULTATION_SETUP_RECORD:
      return {
        ...state,
        isActionLoading: true,
      };

    case ON_REQUEST_INSERT_CONSULTATION_SETUP_RECORD_FINISHED:
    case ON_REQUEST_UPDATE_CONSULTATION_SETUP_RECORD_FINISHED:
      return {
        ...state,
        isEditing: false,
        isAddingRecord: false,
        isUpdatingRecord: false,
        selectedRow: undefined,
        isActionLoading: false,
        ...action.newState,
      };

    case ON_PRESS_CONSULTATION_SETUP_CANCEL:
      return {
        ...state,
        isEditing: false,
        isAddingRecord: false,
        selectedRow: undefined,
        dataSource: state.dataSource.filter(
          (rec) => rec.idValue !== state.selectedRow
        ),
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
