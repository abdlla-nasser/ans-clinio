import React, { memo } from "react";
import Table from "./index";
import HeaderTools from "./headerTools";
import PageContent from "../PageContent";
import Flex from "../Flex";

function TableWithToolsContainer({
  total,
  onChangeLastColLang,
  langSelectOptions,
  langSelectValue,
  onPressEditOrCancel,
  isAddingRecord,
  isUpdatingRecord,
  width,
  dataSource,
  columns,
  rowKey,
  canInsert,
  canDelete,
  hideEditSaveIcon,
  hidePrinterInformationIcon,
  onAdd,
  onDelete,
  handleInsertOrUpdate,
  isEditing,
  selectedRow,
  isActionLoading,
  loading,
  onSelect,
  children,
  tableScroll,
  onfetchMoreData,
  onPressSearch,
  excelView,
  rowSelctionProps,
  onDoubleClickRecord,
  withPagination,
}) {
  const isThereSelectedRow = selectedRow || (typeof selectedRow === "number" && selectedRow >= 0);
  let x = 0,
    y = 155;
  if (tableScroll) {
    x = tableScroll.x;
    y = tableScroll.y;
  }

  function renderChildren({ mainHeight }) {
    const headerTools = (
      <>
        <HeaderTools
          onChangeLastColLang={onChangeLastColLang}
          langSelectOptions={langSelectOptions}
          langSelectValue={langSelectValue}
          onPressEditOrCancel={onPressEditOrCancel}
          isAddingRecord={isAddingRecord}
          isUpdatingRecord={isUpdatingRecord}
          canInsert={canInsert}
          canDelete={canDelete}
          hideEditSaveIcon={hideEditSaveIcon}
          hidePrinterInformationIcon={hidePrinterInformationIcon}
          onPressAdd={onAdd}
          onPressDelete={onDelete}
          onPressSaveOrEdit={handleInsertOrUpdate}
          isEditing={isEditing}
          isThereSelectedRow={isThereSelectedRow}
          disabled={isActionLoading || loading}
          excelView={excelView}
        />
      </>
    );

    return (
      <Flex width="100%" height="100%">
        <Table
          total={total}
          columns={columns}
          dataSource={dataSource}
          rowKey={rowKey}
          loading={loading || isActionLoading}
          onSelectRow={onSelect}
          headerTools={headerTools}
          selectedId={selectedRow}
          width={width}
          rowSelctionProps={rowSelctionProps}
          onfetchMoreData={onfetchMoreData}
          onDoubleClick={onDoubleClickRecord}
          onPressSearch={onPressSearch}
          withPagination={withPagination}
          scroll={{
            y: mainHeight - y,
            x,
          }}
        />
      </Flex>
    );
  }
  return (
    <>
      <PageContent
        // applyBorders
        offset={140}
        // margin="10px 0px auto 0px"
        useHeight
        children={renderChildren}
      />
      {children}
    </>
  );
}

export default memo(TableWithToolsContainer);
