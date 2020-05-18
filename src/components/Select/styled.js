import styled from "styled-components";
import Select from "antd/lib/select";
import Divider from "antd/lib/divider";
import Button from "antd/es/button/button";

export const Option = Select.Option;

export const StyledSelect = styled(Select)`
  overflow-x: hidden;
  width: ${({ width }) =>
    `${typeof width === "number" ? `${width}px` : width}`};
  height: ${({ height }) => `${height}px`};
  flex: ${({ flex }) => flex};
  > .ant-select-selection--multiple {
    height: ${({ height }) => `${height}px`};
  }
  > .ant-select-selection--single {
    ${({ noBorder }) => noBorder && `border: 0px`};
    ${({ borderRadius }) =>
      borderRadius &&
      `
    border-radius: ${borderRadius}px;
    overflow-x: none;
  `};

    > .ant-select-selection {
      ${({ noBorder }) => noBorder && `border: 0px`};
    }
    ${({ setMarkedBorder, borderColor }) =>
      setMarkedBorder &&
      `
    border-radius: 5px;
    border: 2px solid  ${borderColor};
  `};

    ${({ background, color }) =>
      background &&
      `
    background-color: ${background};
    color: ${color || "#fff"};
  `};
    > .ant-select-selection__rendered {
      > .ant-select-selection-selected-value {
        ${({ largeFont }) =>
          largeFont &&
          `
      font-size: 14px;
    font-weight: bold;
    `};
      }
    }
  }
`;

export const Separator = styled(Divider)`
  margin: 7px 0px;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 5px;
`;

export const CenterContent = styled.section`
  text-align: center;
  cursor: pointer;
`;
