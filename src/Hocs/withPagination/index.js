import React from "react";
import { getPageNumbers, PAGE_SIZE_OPTIONS } from "./utils";
import { isArrayHasData } from "../../utils/isThereData";

const { memo, useState, useMemo, lazy, Suspense, useCallback } = React;
const Pagination = lazy(() => import("./partials/index"));

export default ({ WrappedComponent, pageSizeOptions = PAGE_SIZE_OPTIONS }) => {
  const WrapperComponent = (props) => {
    const {
      total,
      dataSource,
      onfetchMoreData,
      recordsPerPage,
      withPagination = true,
    } = props;

    const [pageSize, updatePageSize] = useState(recordsPerPage || 5);
    const [currentPage, updateCurrentPage] = useState(1);

    const isDataSourceExsist = useMemo(() => isArrayHasData(dataSource), [
      dataSource,
    ]);

    const pagesNumbers = useMemo(() => {
      if (isDataSourceExsist) {
        return getPageNumbers(dataSource.length, pageSize);
      }
      return false;
    }, [dataSource, pageSize, isDataSourceExsist]);

    const currentPageData = useMemo(() => {
      if (isDataSourceExsist) {
        const indexOfLastDataSource = currentPage * pageSize;
        const indexOfFistDataSource = indexOfLastDataSource - pageSize;
        return dataSource.slice(indexOfFistDataSource, indexOfLastDataSource);
      } else return dataSource;
    }, [isDataSourceExsist, dataSource, currentPage, pageSize]);

    const onUpdatePageSize = useCallback(
      (value) => {
        const size =
          typeof value === "number"
            ? value
            : isDataSourceExsist
            ? dataSource.length
            : 0;
        updatePageSize(size);
        updateCurrentPage(1);
      },
      [updateCurrentPage, updatePageSize, isDataSourceExsist, dataSource]
    );

    const disableNextIcon = useMemo(() => {
      if (isDataSourceExsist) {
        const len = pagesNumbers.length;
        if (currentPage !== len) {
          return false;
        }
        return len * pageSize >= total;
      } else return false;
    }, [isDataSourceExsist, pagesNumbers, pageSize, currentPage, total]);

    const forceHidePagination = useMemo(() => {
      const disable =
        !pagesNumbers || (pagesNumbers && pagesNumbers.length === 1);
      return disable && dataSource && disableNextIcon && dataSource.length <= 5;
    }, [pagesNumbers, disableNextIcon, dataSource]);

    return (
      <WrappedComponent
        {...props}
        recordsPerPage={pageSize}
        data={
          !withPagination || forceHidePagination ? dataSource : currentPageData
        }
      >
        {isDataSourceExsist && withPagination && !forceHidePagination && (
          <Suspense fallback={null}>
            <Pagination
              onfetchMoreData={onfetchMoreData}
              updateCurrentPage={updateCurrentPage}
              onUpdatePageSize={onUpdatePageSize}
              pageSize={pageSize}
              pageSizeOptions={pageSizeOptions}
              pagesNumbers={pagesNumbers}
              currentPage={currentPage}
              disableNextIcon={disableNextIcon}
            />
          </Suspense>
        )}
      </WrappedComponent>
    );
  };

  return memo(WrapperComponent);
};
