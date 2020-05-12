import styled from "styled-components";
import Layout from "antd/lib/layout";

const { Footer } = Layout;

// export default styled(Footer)`
//   font-family: Roboto;
//   font-size: 14px;
//   line-height: 7px;
//   text-align: right;
//   color: #fff;
//   background-color: #326dbb;
//   height: 50px;
//   bottom: 0px;
//   position: relative;
// `;

export default styled.footer`
  width: 100%;
  height: 3.8rem;
  background-color: rgb(50, 109, 187);
  color: #fff;
  position: absolute;
  bottom: 0px;
  padding: 0px 64px;
`;
