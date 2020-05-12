import styled from "styled-components";
import { baseCss, renderBg } from "./utils";

export default styled.button`
  border: 0px;
  outline: 0;
  min-height: 34px;
  min-width: 80px;
  height: 39px;
  font-family: Roboto;
  font-size: ${({ fontsize }) => `${fontsize || 14}px`};
  font-weight: bold;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  padding: ${({ buttonPadding }) => buttonPadding || "0px"};
  color: ${({ color }) => color || "#fff"};
  line-height: 0px;
  text-align: ${({ center }) => center && "center"};
  cursor: pointer;
  margin: 0px;
  ${({ variant }) =>
    !!variant && baseCss + `background-color: ${renderBg(variant)}`};

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #ede7cd;
    cursor: not-allowed;
    color: #fff;
  `}
`;
