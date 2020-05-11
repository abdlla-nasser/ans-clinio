import styled from "styled-components";
import Layout from "antd/lib/layout";

export const StyledContainer = styled(Layout)`
  background-color: #fff;
`;

export const ContentView = styled(StyledContainer)`
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "93%")};
  margin: auto;
  min-height: ${({ height }) => `${height}px`};
`;
