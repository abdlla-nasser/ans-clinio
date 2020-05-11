import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: ${({ column, reverse }) =>
    column
      ? reverse
        ? "column-reverse"
        : "column"
      : reverse
      ? "row-reverse"
      : "row"};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  margin: ${({ margin }) => margin};
  margin-inline-end: ${({ marginInLineEnd }) => marginInLineEnd};
  padding-inline-start: ${({ paddingInLineStart }) => paddingInLineStart};
  width: ${({ width }) => width};
  line-height: ${({ lineHeight }) => lineHeight};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? "solid 1px #d9d9d9" : ""};
  font-family: Roboto;
  overflow: ${({ overflow }) => overflow};
  flex-wrap: ${({ wrap }) => (wrap === "true" ? "wrap" : "nowrap")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
`;
