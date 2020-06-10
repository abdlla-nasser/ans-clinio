import { requestPageLabels } from "../../../global/actions/labels";

export const createDispatcher = ({ rowKey, pageName, actions = {} }) => (
  dispatch
) => ({
  fetchData: (sorter, filters) => dispatch(actions.fetchData(sorter, filters)),
  onPressEdit: () => dispatch(actions.onPressEdit()),
  onAdd: () => dispatch(actions.onAdd()),
  onPressCancel: () => dispatch(actions.onPressCancel()),
  onPressItem: ({ [rowKey]: recordKey }) => () =>
    dispatch(actions.onSelectRecord(recordKey)),
  onPressSearch: (filters) => dispatch(actions.onPressSearch(filters)),
  onChangeData: (inputData, key, rest) =>
    dispatch(actions.onChangePopOverData(inputData, key, rest)),
  requestInsertRecord: (recordData) =>
    dispatch(actions.requestInsertRecord(recordData)),
  requestUpdateRecord: (recordData) =>
    dispatch(actions.requestUpdateRecord(recordData)),
  onDelete: (item) => dispatch(actions.onDeleteRecord(item)),
  clearFilter: () => dispatch(actions.resetFilter()),
  getPageLabels: () => dispatch(requestPageLabels(pageName)),
  onRowSelection: (keys) => {
    if (actions.onRowSelection) return dispatch(actions.onRowSelection(keys));
  },
  onSelectLastColLang: (langCode, langLabel) =>
    dispatch(actions.onSelectLastColLang(langCode, langLabel)),
  resetColValue: () => dispatch(actions.resetColValue()),
});
