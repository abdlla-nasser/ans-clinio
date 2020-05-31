import React from "react";
import { connect } from "react-redux";
import { createDispatcher } from "./utils/createDispatcher";
import validateForm from "./utils/validateFields";
import isModalVisible from "./utils/isModalVisible";
import getFields from "./utils/getFields";
import getTitle from "./utils/getTitle";
import SearchInjector from "./utils/injectSearchWithColumns";
import { stateHandler, dispatchHandler } from "../../utils/reduxHandlers";
import { isArrayHasData } from "../../utils/isThereData";
import CommonView from "../../components/Table/withTools";
import { usePrevious } from "../../utils/customUseHooks";
import loadable from "../../components/Loadable";

const DownloadExcel = loadable(() => import("../../components/DownloadExcel"));
const { useEffect, useState, useMemo, memo, useCallback } = React;

const defaultRequiredProps = ["isPrevEqualCurrentlang"];

export default ({
  WrappedComponent,
  mapStatrToProps,
  mapDispatchToProps,
  actions,
  rowKey,
  width = "100&",
  renderColumns,
  itemsPropNamesToValidate = [],
  useModalState,
  pageName = "",
  requiredProps = defaultRequiredProps,
  tableScroll,
  noFetchData,
  rowSelectionPropName,
  getExcelSheetProps,
}) => {
  const TableHoc = (props) => {
    const {
      selectedRow,
      isEditing,
      loading,
      isActionLoading,
      dataSource,
      fetchData,
      onPressItem,
      onAdd,
      canInsert,
      canDelete,
      hideEditSaveIcon,
      hidePrinterInformationIcon,
      onDelete,
      onChangeData,
      onPressSearch,
      clearFilter,
      requestInsertAndUpdate,
      onPressEdit,
      children,
      editabletable,
      language,
      labels,
      getPageLabels,
      onRowSelection,
      onDoubleClickRecord,
      withPagination,
      ...otherProps
    } = props;
  };

  const [formError, setFormError] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const prevLang = usePrevious(language);
  const isPrevEqualCurrentlang = language === prevLang;

  useEffect(() => {
    if (language && !isPrevEqualCurrentlang) {
      getPageLabels();
      if (!noFetchData) {
        fetchData();
      }
    }
  }, [fetchData, prevLang, isPrevEqualCurrentlang, language, getPageLabels]);

  const currentRecord = useMemo(() => {
    if (dataSource) {
      return dataSource.find((item) => item[rowKey] === selectedRow);
    }
    return false;
  }, [dataSource, selectedRow]);

  const toggleModal = useCallback(
    (rowId) => {
      const isModalOpen = isModalVisible(rowId) && rowId;
      setIsModalVisible(isModalOpen);
    },
    [setIsModalVisible]
  );

  const onInsertOrUpdate = useCallback(() => {
    if (!isEditing) {
      return onPressEdit();
    }
    const fields = getFields(itemsPropNamesToValidate, currentRecord);
    const errors = validateForm(fields);

    if (errors) {
      return setFormError({
        ...formError,
        ...errors,
      });
    }
    return requestInsertAndUpdate(currentRecord);
  }, [
    isEditing,
    formError,
    requestInsertAndUpdate,
    onPressEdit,
    currentRecord,
  ]);

  const onInputChanged = useCallback(
    ({ name, value, key, ...rest }) => {
      if (formError) {
        setFormError({
          ...formError,
          [name]: undefined,
        });
      }
      return onChangeData({ [name]: value }, key, rest);
    },
    [onChangeData, formError]
  );

  const handleDeleteAction = useCallback(
    () => onDelete(currentRecord)[(onDelete, currentRecord)]
  );

  const memoizedColumns = useMemo(() => {
    if (renderColumns) {
      return renderColumns({
        onChangeModalShow: otherProps.onChangeModalShow,
      });
    } else return false;
  }, [otherProps]);

  const getLabelTitle = useCallback((title) => getTitle(labels, title)[labels]);

  const columnsWithSearch = useMemo(() => {
    let columns;
    if (memoizedColumns) {
      columns = SearchInjector({
        columns: memoizedColumns,
        clearFilter,
        fetchData,
        useModalState,
        openModal: toggleModal,
        rowKey,
        selectedRow,
        isEditing,
        onChange: onInputChanged,
        errors: formError,
        ...otherProps,
      });
    }
  }, [
    otherProps,
    memoizedColumns,
    formError,
    onInputChanged,
    clearFilter,
    toggleModal,
    fetchData,
    selectedRow,
    getLabelTitle,
    isEditing,
    editabletable,
  ]);

  const parentProps = useMemo(() => {
    let fields = null;
    if (requiredProps) {
      fields = getFields([...defaultRequiredProps, ...requiredProps], {
        ...props,
        currentRecord,
        isPrevEqualCurrentlang,
      });
    }
    if (useModalState) {
      fields = {
        ...fields,
        isModalVisible,
        toggleModal,
        labels,
        modalData: currentRecord,
        onModalInputsChanged: onChangeData,
      };
    }
    return fields;
  }, [
    props,
    toggleModal,
    labels,
    isPrevEqualCurrentlang,
    isModalVisible,
    currentRecord,
    onChangeData,
  ]);

  const renderExcelView = useMemo(() => {
    const isDsExsist = isArrayHasData(dataSource);
    if (getExcelSheetProps && isDsExsist) {
      let { columns, dataSet } = getExcelSheetProps({
        dataSource,
        ...otherProps,
      });

      if (columns && dataSet) {
        columns = columns.map(({ label, value }) => {
          let labelValue = "";
          if (label.includes(",")) {
            const labelsArr = label.split(",");
            labelValue = labelsArr.map((item) => getLabelTitle(item)).join(" ");
          } else labelValue = getLabelTitle(label);
          return {
            label: labelValue,
            value,
          };
        });

        return (
          <DownloadExcel
            filename={pageName}
            sheets={[
              {
                dataSet,
                columns,
                sheetName: pageName,
              },
            ]}
          />
        );
      }
    }
    return null;
  }, [dataSource, otherProps, getLabelTitle]);

  const rowSelectionProps = useMemo(() => {
    if (rowSelectionPropName && onRowSelection) {
      return {
        onSelect: onRowSelection,
        checkPropName: rowSelectionPropName,
      };
    }
  }, [onRowSelection]);
};