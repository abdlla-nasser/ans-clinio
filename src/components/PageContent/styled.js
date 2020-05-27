import styled from "styled-components";

export const PageContentWrapper = styled.div`
  /* height: ${({ height }) => `${height}px`}; */
  /* ${({ fullheight, height }) => fullheight && `min-height: ${height}px`} */
  /* max-height: ${({ height }) => `${height}px`}; */
  background-color: ${({ bgcolor }) => bgcolor || `transparent`};
  ${({ applyBorders }) =>
    applyBorders &&
    `
    border: solid 1px #d7d7d7;
    border-radius: 10px;
  `};
  /* padding: 1rem; */
  margin: ${({ margin }) => margin};
  /* ${({ padding }) => padding && `padding: ${padding}`} */
  /* overflow-y: auto; */
`;
