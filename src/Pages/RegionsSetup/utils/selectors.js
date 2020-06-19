import { onFormChange, fetchCountryList } from "../modules/actions";

import {
  fetchData,
  onPressEdit,
  onAddNewRecord,
  onSelectRecord,
  onChangeRowData,
  requestInsertRecord,
  requestUpdateRecord,
  onDeleteRecord,
  onPressCancel,
  onSelectLastColLang,
  resetColValue,
  onPressSearch,
  resetFilter,
} from "../modules/actions";

export const mapStateToProps = ({
  regionsSetupReducer: {
    lastColLang,
    lastColLangList,
    country,
    countryList,
    ...otherReducerData
  },
  labelsReducer: { regionsSetupLabels: labels },
}) => ({
  country,
  countryList,
  navigateTo: {
    pathName: "areasSetup",
    attrName: "region_code",
  },
  canInsert: true,
  canDelete: true,
  langSelectOptions: lastColLangList,
  langSelectValue: lastColLang,
  labels,
  ...otherReducerData,
});

export const actions = {
  fetchData,
  onPressEdit,
  onPressCancel,
  onAdd: onAddNewRecord,
  onSelectRecord,
  onPressSearch,
  onChangePopOverData: onChangeRowData,
  requestInsertRecord,
  requestUpdateRecord,
  onDeleteRecord,
  onSelectLastColLang,
  resetColValue,
  resetFilter,
};

export const mapDispatchToProps = (dispatch) => ({
  onChangeData: (inputData, key, restData) =>
    dispatch(onChangeRowData(inputData, key, restData)),
  fetchData: (sorter, filters) => dispatch(fetchData(sorter, filters)),
  onFormChange: (params) => dispatch(onFormChange(params)),
  fetchCountryList: () => dispatch(fetchCountryList()),
});
