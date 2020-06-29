import initialRowData from "./rowProps";
import idGenerator from "../../../utils/idGenerator";
import {
  FETCH_AREAS_SETUP_DATA,
  FETCH_AREAS_SETUP_DATA_FINISHED,
  ON_SELECT_AREAS_SETUP_ROW,
  ON_PRESS_AREAS_SETUP_EDIT,
  ON_PRESS_AREAS_SETUP_ADD,
  ON_CHANGE_AREAS_SETUP_RECORD_DATA,
  ON_REQUEST_DELETE_AREAS_SETUP_RECORD,
  ON_REQUEST_DELETE_AREAS_SETUP_RECORD_FINISHED,
  ON_PRESS_AREAS_SETUP_CANCEL,
  ON_REQUEST_INSERT_AREAS_SETUP_RECORD,
  ON_REQUEST_INSERT_AREAS_SETUP_RECORD_FINISHED,
  ON_REQUEST_UPDATE_AREAS_SETUP_RECORD,
  ON_REQUEST_UPDATE_AREAS_SETUP_RECORD_FINISHED,
  ON_SELECT_LAST_COLUMN_LANGUAGE_AREAS_SETUP,
  ON_RESET_LAST_COLUMN_LANGUAGE_AREAS_SETUP,
  ON_PRESS_SEARCH_AREAS_SETUP,
  ON_PRESS_SEARCH_AREAS_SETUP_FINISHED,
  ON_RESET_FILTER_AREAS_SETUP,
  FETCH_REGIONS_LIST_AREAS_SETUP_FINISHED,
  ON_AREAS_SETUP_FORM_CHANGED,
  FETCH_COUNTRY_LIST_AREAS_SETUP_FINISHED,
} from "./types";

import { columns, excelColumns } from "../partials/columns";

const initialState = {
  loading: false,
  isActionLoading: false,
  selectedRow: undefined,
  isEditing: false,
  isAddingRecord: false,
  isUpdatingRecord: false,
  dataSource: [],
  total: undefined,
  stateColumns: columns,
  lastColLang: undefined,
  lastColLangList: [
    { key: "tr", value: "Turkish" },
    { key: "es", value: "Spanish" },
    { key: "it", value: "Italian" },
    { key: "de", value: "German" },
  ],
  stateExcelColumns: excelColumns,
  country: undefined,
  countryList: undefined,
  region: undefined,
  regionsList: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_RESET_LAST_COLUMN_LANGUAGE_AREAS_SETUP:
      return {
        ...state,
        stateColumns: columns,
        stateExcelColumns: excelColumns,
      };
    case ON_SELECT_LAST_COLUMN_LANGUAGE_AREAS_SETUP:
      return {
        ...state,
        lastColLang: action.key,
        stateColumns: [...state.stateColumns, action.dynamicColumn],
        stateExcelColumns: [...state.stateExcelColumns, action.excelColumn],
      };

    case FETCH_AREAS_SETUP_DATA:
    case ON_PRESS_SEARCH_AREAS_SETUP:
      return {
        ...state,
        loading: true,
      };

    case FETCH_AREAS_SETUP_DATA_FINISHED:
      const dataFromServer = action.data || [];
      const isDataSortedOrFiltered = action.isSorted || action.isFiltered;

      return {
        ...state,
        dataSource: isDataSortedOrFiltered
          ? dataFromServer
          : [...(state.dataSource || []), ...dataFromServer],
        total: action.totalRecords,
        loading: false,
      };

    case ON_PRESS_SEARCH_AREAS_SETUP_FINISHED:
      return {
        ...state,
        dataSource: action.data,
        loading: false,
      };

    case ON_RESET_FILTER_AREAS_SETUP:
      return {
        ...state,
        dataSource: null,
      };

    case ON_SELECT_AREAS_SETUP_ROW:
      return {
        ...state,
        selectedRow: action.id,
      };

    case ON_PRESS_AREAS_SETUP_ADD:
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

    case ON_PRESS_AREAS_SETUP_EDIT:
      return {
        ...state,
        isEditing: true,
        isUpdatingRecord: true,
      };

    case ON_CHANGE_AREAS_SETUP_RECORD_DATA:
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

    case ON_REQUEST_INSERT_AREAS_SETUP_RECORD:
    case ON_REQUEST_UPDATE_AREAS_SETUP_RECORD:
      return {
        ...state,
        isActionLoading: true,
      };

    case ON_REQUEST_INSERT_AREAS_SETUP_RECORD_FINISHED:
    case ON_REQUEST_UPDATE_AREAS_SETUP_RECORD_FINISHED:
      return {
        ...state,
        isEditing: false,
        isAddingRecord: false,
        isUpdatingRecord: false,
        selectedRow: undefined,
        isActionLoading: false,
        ...action.newState,
      };

    case ON_PRESS_AREAS_SETUP_CANCEL:
      return {
        ...state,
        isEditing: false,
        isAddingRecord: false,
        selectedRow: undefined,
        dataSource: state.dataSource.filter(
          (rec) => rec.idValue !== state.selectedRow
        ),
      };

    case ON_REQUEST_DELETE_AREAS_SETUP_RECORD:
      const { idValue } = action.record;
      return {
        ...state,
        isEditing: false,
        isActionLoading: true,
        selectedRow: idValue,
      };

    case ON_REQUEST_DELETE_AREAS_SETUP_RECORD_FINISHED:
      return {
        ...state,
        isActionLoading: false,
        selectedRow: undefined,
        ...action.newState,
      };

    case FETCH_COUNTRY_LIST_AREAS_SETUP_FINISHED:
      return {
        ...state,
        countryList: action.data || [],
      };

    case FETCH_REGIONS_LIST_AREAS_SETUP_FINISHED:
      return {
        ...state,
        regionsList: action.data || [],
      };

    case ON_AREAS_SETUP_FORM_CHANGED:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};
