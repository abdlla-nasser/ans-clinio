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
  insuranceCompaniesSetupReducer: {
    lastColLang,
    lastColLangList,
    ...otherReducerData
  },
  labelsReducer: { insuranceCompaniesSetupLabels: labels },
}) => ({
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
});
