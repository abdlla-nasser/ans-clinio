import styled from "styled-components";
import { colors } from "../../utils/theme";

export const Layout = styled.div`
  background-color: ${colors.appBackground};
`;

export const Content = styled.div`
  padding: 10px 50px;
  min-height: ${({ height }) => `${height}px`};
`;
