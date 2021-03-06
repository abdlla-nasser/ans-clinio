import React, { useEffect, useState, useMemo, memo, useCallback } from "react";
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
const defaultRequiredProps = ["isPrevEqualCurrentlang"];

export default ({
  WrappedComponent,
  mapStateToProps,
  mapDispatchToProps,
  actions,
  rowKey,
  width = "100%",
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
      navigateTo,
      stateExcelColumns,
      onSelectLastColLang,
      resetColValue,
      langSelectOptions,
      langSelectValue,
      onChangeLangValue,
      stateColumns,
      onPressCancel,
      isEditing,
      isAddingRecord,
      isUpdatingRecord,
      requestInsertRecord,
      requestUpdateRecord,
      selectedRow,
      updatingRecord,
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
      onPressEdit,
      children,
      editabletable,
      language,
      labels,
      getPageLabels,
      onRowSelection,
      onDoubleClickRecord,
      withPagination,
      total,
      ...otherProps
    } = props;

    const [formError, setFormError] = useState(undefined);
    const [ismodalVisible, setIsModalVisible] = useState(false);

    const prevLang = usePrevious(language.language_code);
    const isPrevEqualCurrentlang = language.language_code === prevLang;

    useEffect(() => {
      if (language && language.language_code && !isPrevEqualCurrentlang) {
        getPageLabels(pageName, language.language_code);
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
      // const fields = getFields(itemsPropNamesToValidate, currentRecord);
      const fields = getFields(itemsPropNamesToValidate, currentRecord.name);
      const errors = validateForm(fields);

      if (errors) {
        return setFormError({
          ...formError,
          ...errors,
        });
      }
      if (isAddingRecord) {
        return requestInsertRecord(currentRecord);
      } else if (isUpdatingRecord) {
        return requestUpdateRecord(currentRecord);
      }
    }, [
      isAddingRecord,
      isUpdatingRecord,
      formError,
      requestInsertRecord,
      requestUpdateRecord,
      currentRecord,
    ]);

    const onPressEditOrCancel = useCallback(() => {
      if (isUpdatingRecord || isAddingRecord) {
        return onPressCancel();
      } else {
        return onPressEdit();
      }
    }, [isAddingRecord, isUpdatingRecord, onPressCancel, onPressEdit]);

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

    const handleDeleteAction = useCallback(() => onDelete(currentRecord), [
      onDelete,
      currentRecord,
    ]);

    // const memoizedColumns = useMemo(() => {
    //   if (renderColumns) {
    //     return renderColumns({
    //       onChangeModalShow: otherProps.onChangeModalShow,
    //     });
    //   } else return false;
    // }, [otherProps]);
    const memoizedColumns = useMemo(() => stateColumns, [stateColumns]);
    const getLabelTitle = useCallback((title) => getTitle(labels, title), [labels]);
    const columnsWithSearch = useMemo(() => {
      let columns;
      if (memoizedColumns) {
        columns = SearchInjector({
          columns: memoizedColumns,
          clearFilter,
          fetchData,
          useModalState,
          navigateTo,
          openModal: toggleModal,
          rowKey,
          selectedRow,
          isEditing,
          onChange: onInputChanged,
          errors: formError,
          getTitle: getLabelTitle,
          ...otherProps,
        });
      }
      return columns;
    }, [
      navigateTo,
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
          ismodalVisible,
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
      ismodalVisible,
      currentRecord,
      onChangeData,
    ]);

    const renderExcelView = useMemo(() => {
      const isDsExsist = isArrayHasData(dataSource);
      if (getExcelSheetProps && isDsExsist) {
        let { dataSet } = getExcelSheetProps({
          dataSource,
          ...otherProps,
        });
        let finalExcelColumns;

        if (stateExcelColumns && dataSet) {
          finalExcelColumns = stateExcelColumns.map(({ label, value }) => {
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
                  columns: finalExcelColumns,
                  sheetName: pageName,
                },
              ]}
            />
          );
        }
      }
      return null;
    }, [dataSource, otherProps, getLabelTitle, stateExcelColumns]);

    const rowSelectionProps = useMemo(() => {
      if (rowSelectionPropName && onRowSelection) {
        return {
          onSelect: onRowSelection,
          checkPropName: rowSelectionPropName,
        };
      }
    }, [onRowSelection]);

    const handleOnSelectLastColLang = useMemo(
      () => (langCode, { props: { children: langLabel } }) => {
        resetColValue();
        onSelectLastColLang(langCode, langLabel);
      },
      [onSelectLastColLang, resetColValue]
    );

    return (
      <WrappedComponent {...parentProps}>
        <CommonView
          total={total}
          onChangeLastColLang={handleOnSelectLastColLang}
          langSelectOptions={langSelectOptions}
          langSelectValue={langSelectValue}
          onPressEditOrCancel={onPressEditOrCancel}
          isAddingRecord={isAddingRecord}
          isUpdatingRecord={isUpdatingRecord}
          canInsert={canInsert}
          canDelete={canDelete}
          hideEditSaveIcon={hideEditSaveIcon}
          hidePrinterInformationIcon={hidePrinterInformationIcon}
          dataSource={dataSource}
          columns={columnsWithSearch}
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
          rowSelctionProps={rowSelectionProps}
          width={width}
          tableScroll={tableScroll}
          onfetchMoreData={fetchData}
          onPressSearch={onPressSearch}
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
    dispatchHandler({
      mapDispatchToProps,
      createDispatcher: createDispatcher({ rowKey, pageName, actions }),
    })
  )(memo(TableHoc));
};
