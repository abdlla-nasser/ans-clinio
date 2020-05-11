import styled from "styled-components";
import Layout from "antd/lib/layout";

const { Footer } = Layout;

export default styled(Footer)`
  font-family: Roboto;
  font-size: 14px;
  line-height: 7px;
  text-align: center;
  color: #fff;
  background-color: #326dbb;
  height: ${({ height }) => `${height || 50}px`};
  bottom: 0px;
  position: relative;
`;
