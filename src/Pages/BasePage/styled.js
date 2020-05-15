import styled from "styled-components";
import Layout from "antd/lib/layout";
import { colors } from "../../utils/theme";

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  background-color: ${colors.appBackground};
  padding: 0 1.5rem;
`;

export const StyledContent = styled(Content)`
  width: 100%;
  min-height: ${({ height }) => `${height}px`};
`;
