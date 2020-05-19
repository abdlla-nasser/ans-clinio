import styled from "styled-components";
import Layout from "antd/lib/layout";
import { colors } from "../../utils/theme";

const { Footer } = Layout;

export const StyledFooter = styled(Footer)`
  width: 100%;
  height: 2.2rem;
  background-color: rgb(50, 109, 187);
  color: #fff;
  position: absolute;
  bottom: 0px;
  padding: 10px 6.5rem;
  ${({ isLogin }) =>
    isLogin &&
    `
    background-color: transparent;
    color: ${colors.appPrimiry};
     height: 3.2rem;
    `}
`;

export const FooterLogo = styled.img`
  width: 50px;
  height: 20px;
`;
