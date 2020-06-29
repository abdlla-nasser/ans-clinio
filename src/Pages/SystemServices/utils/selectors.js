import { isArrayHasData } from "../../../utils/isThereData";
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
  fetchCountryList,
  fetchServiceGroupsList,
} from "../modules/actions";

export const mapStateToProps = ({
  systemServicesReducer: {
    lastColLang,
    lastColLangList,
    dataSource,
    ...otherReducerData
  },
  labelsReducer: { systemServicesLabels: labels },
}) => ({
  canInsert: isArrayHasData(dataSource),
  canDelete: true,
  langSelectOptions: lastColLangList,
  langSelectValue: lastColLang,
  dataSource,
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
  fetchServiceGroupsList: () => dispatch(fetchServiceGroupsList()),
});
