import styled from "styled-components";
import Layout from "antd/lib/layout";

const { Footer } = Layout;

export const StyledFooter = styled(Footer)`
  width: 100%;
  height: 2.2rem;
  background-color: rgb(50, 109, 187);
  color: #fff;
  position: fixed;
  bottom: 0px;
  padding: 10px 6.5rem;
`;

export const FooterLogo = styled.img`
  width: 50px;
  height: 20px;
`;
