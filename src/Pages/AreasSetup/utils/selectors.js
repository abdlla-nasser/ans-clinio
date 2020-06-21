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
  onFormChange,
  fetchRegionsList,
} from "../modules/actions";

export const mapStateToProps = ({
  areasSetupReducer: {
    lastColLang,
    lastColLangList,
    country,
    countryList,
    ...otherReducerData
  },
  labelsReducer: { areasSetupLabels: labels },
}) => ({
  country,
  countryList,
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
  fetchRegionsList: () => dispatch(fetchRegionsList()),
});
