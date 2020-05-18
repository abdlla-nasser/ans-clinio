import React from "react";
import Table from "./index";
import HeaderTools from "./headerTools";
import PageContent from "../PageContent";
import Flex from "../Flex";

const { memo } = React;

function TableWithToolsContainer({
  AnthorView,
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
  headerSelectOptions,
  onChangeHeaderSelect,
  headerSelectNewValue,
  excelView,
  rowSelctionProps,
  onDoubleClickRecord,
  withPagination
}) {
  const isThereSelectedRow =
    selectedRow || (typeof selectedRow === "number" && selectedRow >= 0);
  let x = 0,
    y = 155;
  if (tableScroll) {
    x = tableScroll.x;
    y = tableScroll.y;
  }

  function renderChildren({ mainHeight }) {
    const headerTools = (
      <HeaderTools
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
        headerSelectOptions={headerSelectOptions}
        onChangeHeaderSelect={onChangeHeaderSelect}
        headerSelectNewValue={headerSelectNewValue}
        excelView={excelView}
      />
    );

    return (
      <Flex width="100%" height="100%">
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={rowKey}
          loading={loading || isActionLoading}
          onSelectRow={onSelect}
          headerTools={headerTools}
          selectedId={selectedRow}
          margin="10px auto 5px auto"
          width={width}
          rowSelctionProps={rowSelctionProps}
          onfetchMoreData={onfetchMoreData}
          onDoubleClick={onDoubleClickRecord}
          onPressSearch={onPressSearch}
          withPagination={withPagination}
          scroll={{
            y: mainHeight - y,
            x
          }}
        />
        {AnthorView && <AnthorView />}
      </Flex>
    );
  }
  return (
    <>
      <PageContent
        applyBorders
        offset={140}
        margin="20px 0px auto 0px"
        useHeight
        children={renderChildren}
      />
      {children}
    </>
  );
}

export default memo(TableWithToolsContainer);
