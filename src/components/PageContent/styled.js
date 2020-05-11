import styled from "styled-components";

export const PageContentWrapper = styled.div`
  height: ${({ height }) => `${height}px`};
  ${({ fullheight, height }) => fullheight && `min-height: ${height}px`}
  background-color: ${({ bgcolor }) => bgcolor || `transparent`};
  max-height: ${({ height }) => `${height}px`};
  ${({ applyBorders }) =>
    applyBorders &&
    `
    border: solid 1px #d7d7d7;
    border-radius: 10px;
  `};
  margin: ${({ margin }) => margin};
  ${({ padding }) => padding && `padding: ${padding}`}
  /* overflow-y: auto; */
`;
