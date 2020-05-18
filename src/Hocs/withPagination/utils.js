export const PAGE_SIZE_OPTIONS = ["5", "10", "20", "50", "100", "all"];

export const createSelectOptions = sizes => {
  sizes = sizes || PAGE_SIZE_OPTIONS;
  return sizes.map(item => {
    const canBeNumber = !isNaN(+item);
    return {
      key: canBeNumber ? +item : item,
      value: canBeNumber ? `${item} / page` : item
    };
  });
};

export const getPageNumbers = (total, recordsPerPage) => {
  let pageNumbers = [];
  for (let page = 1; page <= Math.ceil(total / recordsPerPage); page++) {
    pageNumbers = [...pageNumbers, page];
  }

  return pageNumbers;
};

export const SIDES = {
  LEFT_PAGE: "LEFT",
  RIGHT_PAGE: "RIGHT"
};

const range = (from, to, step = 1) => {
  let i = from;
  let range = [];
  while (i <= to) {
    range = [...range, i];
    i += step;
  }

  return range;
};

export const fetchPageNumbers = ({
  pageNeighbours,
  totalPages,
  currentPage
}) => {
  const totalNumbers = pageNeighbours * 2 + 2;
  if (totalPages > totalNumbers) {
    let pages = [];

    const leftBound = currentPage - pageNeighbours;
    const rightBound = currentPage + pageNeighbours;
    const beforeLastPage = totalPages - 1;

    const startPage = leftBound > 2 ? leftBound : 2;
    const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

    pages = range(startPage, endPage);

    const pagesCount = pages.length;
    const singleSpillOffset = totalNumbers - pagesCount - 1;

    const leftSpill = startPage > 2;
    const rightSpill = endPage < beforeLastPage;

    const leftSpillPage = SIDES.LEFT_PAGE;
    const rightSpillPage = SIDES.RIGHT_PAGE;

    if (leftSpill && !rightSpill) {
      const extraPages = range(startPage - singleSpillOffset, startPage - 1);
      pages = [leftSpillPage, ...extraPages, ...pages];
    } else if (!leftSpill && rightSpill) {
      const extraPages = range(endPage + 1, endPage + singleSpillOffset);
      pages = [...pages, ...extraPages, rightSpillPage];
    } else if (leftSpill && rightSpill) {
      pages = [leftSpillPage, ...pages, rightSpillPage];
    }

    return [1, ...pages, totalPages];
  }

  return range(1, totalPages);
};
