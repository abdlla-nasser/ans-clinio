import { requestPageLabels } from "../../../global/actions/labels";

export const createDisptacher = ({ rowKey, pageName, actions = {} }) => (
  dispatch
) => ({
  fetchData: (sorter) => dispatch(actions.fetchData(sorter)),
  onPressEdit: () => dispatch(actions.onPressEdit()),
  onAdd: () => dispatch(actions.onAdd()),
  onPressItem: ({ [rowKey]: recordKey }) => () =>
    dispatch(actions.onSelectRecord(recordKey)),
  onPressSearch: (filters) => dispatch(actions.onPressSearch(filters)),
  onChangeData: (inputData, key, rest) =>
    dispatch(actions.onChangePopOverData(inputData, key, rest)),
  requestInsertAndUpdate: (recordData) =>
    dispatch(actions.requestInsertAndUpdate(recordData)),
  onDelete: (item) => dispatch(actions.onDeleteRecord(item)),
  clearFilter: () => dispatch(actions.resetFilter()),
  getPageLabels: () => dispatch(requestPageLabels(pageName)),
  onRowSelection: (keys) => {
    if (actions.onRowSelection) {
      return dispatch(actions.onRowSelection(keys));
    }
  },
});
