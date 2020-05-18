import React from "react";
import { connect } from "react-redux";
import { createDisptacher } from "./utils/createDisptacher";
import validateForm from "./utils/validateFields";
import isModalVisible from "./utils/isModalVisible";
import getFields from "./utils/getFileds";
import getTitle from "./utils/getTitle";
import SearchInjector from "./utils/injectSearchWithColumns";
import { handlerDispatchers, stateHandler } from "../../utils/reduxHandlers";
import { isArrayHasData } from "../../utils/isThereData";
import CommonView from "../../components/Table/withTools";
import { usePrevious } from "../../utils/customUseHooks";
import loadable from "../../components/Loadable";
const DownloadExcel = loadable(() => import("../../components/DownloadExcel"));

const { useEffect, useState, useMemo, memo, useCallback } = React;

const defaultRequiredProps = ["isPrevEquelCurrentlang"];

export default ({
  WrappedComponent,
  mapStateToProps,
  actions,
  getDispacthToProps,
  rowKey,
  width = "80%",
  renderColumns,
  itemsPropNamesToValidate = [],
  useModalState,
  AnthorView,
  submitToPrivigeContainer,
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
      langId,
      itemsPriviliges,
      labels,
      getPageLabels,
      headerSelectOptions,
      onChangeHeaderSelect,
      headerSelectNewValue,
      onRowSelection,
      onDoubleClickRecord,
      authorization_type,
      withPagination,
      ...otherProps
    } = props;

    const [formError, updateState] = useState(undefined);
    const [isVisible, updateModalState] = useState(false);
    const isRtl = langId === 2;

    const prevLang = usePrevious(langId);
    const isPrevEquelCurrentlang = langId === prevLang;

    useEffect(() => {
      if (langId && !isPrevEquelCurrentlang) {
        getPageLabels();
        if (!noFetchData) {
          fetchData();
        }
      }
    }, [fetchData, prevLang, isPrevEquelCurrentlang, langId, getPageLabels]);

    const currentRecord = useMemo(() => {
      if (dataSource) {
        return dataSource.find((item) => item[rowKey] === selectedRow);
      }
      return false;
    }, [dataSource, selectedRow]);

    const toggleModal = useCallback(
      (rowId) => {
        const isOpen = isModalVisible(rowId) && rowId;
        updateModalState(isOpen);
      },
      [updateModalState]
    );

    const onInsertOrUpdate = useCallback(() => {
      if (!isEditing) {
        return onPressEdit();
      }
      const fields = getFields(itemsPropNamesToValidate, currentRecord);
      const errors = validateForm(fields);

      if (errors) {
        return updateState({
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
          updateState({
            ...formError,
            [name]: undefined,
          });
        }
        return onChangeData({ [name]: value }, key, rest);
      },
      [onChangeData, formError]
    );

    const handleDeleteAction = useCallback(() => onDelete(currentRecord), [
      onDelete,
      currentRecord,
    ]);

    const memorizedCols = useMemo(() => {
      if (renderColumns) {
        return renderColumns({
          isRtl,
          onChangeModalShow: otherProps.onChangeModalShow,
          authorization_type,
        });
      } else return false;
    }, [isRtl, otherProps, authorization_type]);

    const getLabelTitle = useCallback((title) => getTitle(labels, title), [
      labels,
    ]);

    const injectedColumns = useMemo(() => {
      let columns;
      if (memorizedCols) {
        columns = SearchInjector({
          isRtl,
          clearFilter,
          openModal: toggleModal,
          rowKey,
          useModalState,
          fetchData,
          selectedRow,
          getTitle: getLabelTitle,
          isEditing: submitToPrivigeContainer
            ? isEditing && editabletable
            : isEditing,
          onChange: onInputChanged,
          errors: formError,
          columns: memorizedCols,
          ...otherProps,
        });
      }
      return columns;
    }, [
      otherProps,
      memorizedCols,
      formError,
      onInputChanged,
      isRtl,
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
          isPrevEquelCurrentlang,
        });
      }
      if (useModalState) {
        fields = {
          ...fields,
          isVisible,
          toggleModal,
          labels,
          modalData: currentRecord,
          onModalInputsChanged: onChangeData,
          itemsPrivs: itemsPriviliges,
        };
      }
      return fields;
    }, [
      props,
      toggleModal,
      labels,
      isPrevEquelCurrentlang,
      isVisible,
      currentRecord,
      onChangeData,
      itemsPriviliges,
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
              labelValue = labelsArr
                .map((item) => getLabelTitle(item))
                .join(" ");
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

    const rowSelctionProps = useMemo(() => {
      if (rowSelectionPropName && onRowSelection) {
        return {
          onSelect: onRowSelection,
          checkPropName: rowSelectionPropName,
        };
      }
    }, [onRowSelection]);

    return (
      <WrappedComponent {...parentProps}>
        <CommonView
          canInsert={canInsert}
          canDelete={canDelete}
          hideEditSaveIcon={hideEditSaveIcon}
          hidePrinterInformationIcon={hidePrinterInformationIcon}
          dataSource={dataSource}
          columns={injectedColumns}
          onAdd={onAdd && onAdd}
          onDelete={handleDeleteAction}
          rowKey={rowKey}
          handleInsertOrUpdate={onInsertOrUpdate}
          isEditing={isEditing}
          selectedRow={selectedRow}
          isActionLoading={isActionLoading}
          loading={loading}
          onSelect={onPressItem}
          onDoubleClickRecord={onDoubleClickRecord}
          rowSelctionProps={rowSelctionProps}
          width={width}
          AnthorView={AnthorView}
          tableScroll={tableScroll}
          onfetchMoreData={fetchData}
          onPressSearch={onPressSearch}
          headerSelectOptions={headerSelectOptions}
          onChangeHeaderSelect={onChangeHeaderSelect}
          headerSelectNewValue={headerSelectNewValue}
          excelView={renderExcelView}
          withPagination={withPagination}
        >
          {children}
        </CommonView>
      </WrappedComponent>
    );
  };

  return connect(
    stateHandler(mapStateToProps),
    handlerDispatchers({
      getDispacthToProps,
      createDisptacher: createDisptacher({
        rowKey,
        pageName,
        actions,
      }),
    })
  )(memo(TableHoc));
};
