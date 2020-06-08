import styled from "styled-components";

export const TableContainer = styled.div`
  width: ${({ width }) => (width ? width : "98%")};
  margin: ${({ margin }) => margin || "auto"};
  background-color: ${({ bg }) => bg || "transparent"};
`;

export const ToolsContainer = styled(TableContainer)`
  width: 100%;
  margin: ${({ margin }) => margin || "auto"};
  display: flex;
  height: 42px;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: center;
  padding-inline-start: 45%;
  padding-inline-end: 1%;
`;
