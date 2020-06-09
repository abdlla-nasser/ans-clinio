import React, { useEffect } from "react";
import Table from "antd/lib/table";
import { TableContainer } from "./styled";
import "./index.css";
import getFilters from "./getFilters";
import WithPagination from "../../Hocs/withPagination";
import { isObjHasData, isArrayHasData } from "../../utils/isThereData";

const { useCallback, useState } = React;

const TableView = function ({
  columns,
  rowKey,
  selectedId,
  loading,
  margin,
  scroll,
  headerTools = null,
  onSelectRow,
  selectedIds,
  backgroundColor,
  renderClassName,
  width,
  onDoubleClick,
  containerClassName,
  data,
  children,
  dataSource,
  onfetchMoreData,
  onPressSearch,
  rowSelctionProps,
  ...props
}) {
  const [selectedRowKeys, updateSelectedKeys] = useState([]);
  const shouldUseSelection = isObjHasData(rowSelctionProps);

  useEffect(() => {
    if (shouldUseSelection) {
      const isDsExsist = isArrayHasData(dataSource);
      const { checkPropName } = rowSelctionProps;
      if (isDsExsist && checkPropName) {
        let keys = [];
        dataSource.forEach((item) => {
          if (item[checkPropName] === "Y") {
            keys = [...keys, item[rowKey]];
          }
        });
        updateSelectedKeys(keys);
      }
    }
  }, [
    dataSource,
    updateSelectedKeys,
    shouldUseSelection,
    rowSelctionProps,
    rowKey,
  ]);

  function renderRowClassName(rec, id) {
    if (renderClassName) {
      return renderClassName(rec, id);
    }
    if (isArrayHasData(selectedIds)) {
      return selectedIds.includes(rec[rowKey]) ? "selected-row" : "";
    } else if (selectedId) {
      return selectedId === rec[rowKey] ? "selected-row" : "";
    }
    if (rec.hasOwnProperty("error_flag") && rec["error_flag"] === "E") {
      return "error-row";
    }
    if (rec.hasOwnProperty("flag") && rec["flag"] === 2) {
      return "flag-2-row";
    } else if (rec.hasOwnProperty("flag") && rec["flag"] === 3)
      return "flag-3-row";
  }

  function onRow(rec) {
    return {
      onClick: onSelectRow && onSelectRow(rec),
      onDoubleClick: onDoubleClick && onDoubleClick(rec),
    };
  }

  const formatFilters = useCallback(getFilters, [getFilters]);

  const handleTableChange = (pagination, filters, sorter) => {
    if (isObjHasData(sorter) && onfetchMoreData) {
      let { columnKey, field, order } = sorter;
      order = order === "ascend" ? "ASC" : "DESC";
      onfetchMoreData(`${columnKey || field},${order}`);
    }

    if (isObjHasData(filters) && onPressSearch) {
      const filtersObj = formatFilters(filters);
      if (isObjHasData(filtersObj)) {
        onPressSearch(filtersObj);
      }
    }
  };

  const handleSelectCheckbox = useCallback(
    (selectedRowKeys) => {
      if (shouldUseSelection) {
        if (rowSelctionProps.onSelect) {
          rowSelctionProps.onSelect(selectedRowKeys);
        }
      }
      updateSelectedKeys(selectedRowKeys);
    },
    [updateSelectedKeys, rowSelctionProps, shouldUseSelection]
  );

  const rowSelection = shouldUseSelection
    ? {
        onChange: handleSelectCheckbox,
        selectedRowKeys,
      }
    : null;

  return (
    <TableContainer
      margin={margin}
      className={containerClassName}
      bg={backgroundColor}
      width={width}
    >
      {headerTools}
      <Table
        rowKey={rowKey}
        bordered
        columns={columns}
        dataSource={data}
        loading={loading}
        rowSelection={rowSelection}
        onRow={onRow}
        rowClassName={renderRowClassName}
        scroll={scroll}
        pagination={false}
        onChange={handleTableChange}
        {...props}
      />

      {children}
    </TableContainer>
  );
};

TableView.defaultProps = {
  withPagination: true,
};

export default WithPagination({
  WrappedComponent: TableView,
});
