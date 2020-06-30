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
  onPressSearch,
  resetFilter,
} from "../modules/actions";

export const mapStateToProps = ({
  languagesSetupReducer,
  labelsReducer: { languagesSetupLabels: labels },
}) => ({
  canInsert: true,
  canDelete: true,
  labels,
  ...languagesSetupReducer,
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
  resetFilter,
};

export const mapDispatchToProps = (dispatch) => ({
  onChangeData: (inputData, key, restData) =>
    dispatch(onChangeRowData(inputData, key, restData)),
});
