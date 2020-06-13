import React from "react";
import { useSelector } from "react-redux";
import { Container, PageItem } from "./styled";
import Flex from "../../../components/Flex";
import Icon from "../../../components/Icon";
import Select from "../../../components/Select";
import { createSelectOptions, fetchPageNumbers, SIDES } from "../utils";

const { useMemo } = React;

const iconProps = {
  lineheight: "0",
  marginend: "0",
  size: 14,
};

export default ({
  updateCurrentPage,
  pagesNumbers,
  onfetchMoreData,
  pageSize,
  onUpdatePageSize,
  pageSizeOptions,
  currentPage,
  disableNextIcon,
}) => {
  const isRTL = useSelector(
    ({ appBaseReducer }) => appBaseReducer.language.r2l
  );
  const pageNeighbours = Math.max(0, Math.min(1, 2));
  const totalPages = pagesNumbers.length;

  const options = useMemo(() => createSelectOptions(pageSizeOptions), [
    pageSizeOptions,
  ]);

  const pages = useMemo(
    () =>
      fetchPageNumbers({
        currentPage,
        pageNeighbours,
        totalPages,
      }),
    [pageNeighbours, totalPages, currentPage]
  );

  const onSelectPage = (page) => () => updateCurrentPage(page);

  const onClickNextIcon = () => {
    if (currentPage === totalPages) {
      if (onfetchMoreData) {
        return onfetchMoreData();
      }
    } else {
      return updateCurrentPage(currentPage + 1);
    }
  };

  return (
    <Flex
      height="38px"
      align="center"
      justify="flex-end"
      width="100%"
      margin="9px 0px 0px 0px"
    >
      <Container>
        <PaginationItem
          disabled={currentPage === 1}
          onClick={onSelectPage(currentPage === 1 ? 1 : currentPage - 1)}
          type={isRTL ? "right" : "left"}
        />

        {pages.map((page, index) => {
          if (page === SIDES.LEFT_PAGE)
            return (
              <PaginationItem
                key={index}
                disabled={currentPage === 1}
                onClick={onSelectPage(currentPage - pageNeighbours * 2 - 1)}
                type="double-left"
              />
            );

          if (page === SIDES.RIGHT_PAGE)
            return (
              <PaginationItem
                key={index}
                disabled={currentPage === totalPages}
                onClick={onSelectPage(currentPage + pageNeighbours * 2 + 1)}
                type="double-right"
              />
            );

          return (
            <PaginationItem
              key={index}
              onClick={onSelectPage(page)}
              children={page}
              selected={page === currentPage}
            />
          );
        })}

        <PaginationItem
          onClick={!disableNextIcon ? onClickNextIcon : undefined}
          disabled={disableNextIcon}
          type={isRTL ? "left" : "right"}
        />

        <PageItem noBorder>
          <Select
            defaultValue={pageSize}
            firstActiveValue={pageSize}
            height={40}
            options={options}
            size="default"
            width={120}
            onChange={onUpdatePageSize}
            value={pageSize}
          />
        </PageItem>
      </Container>
    </Flex>
  );
};

const PaginationItem = ({ disabled, type, children, onClick, selected }) => (
  <PageItem disabled={disabled} onClick={onClick} selected={selected}>
    {children ? (
      children
    ) : (
      <Icon {...iconProps} type={type} disabled={disabled} />
    )}
  </PageItem>
);
