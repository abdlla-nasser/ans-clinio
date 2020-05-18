import styled from "styled-components";

export const InputContainer = styled.div`
  ${({ height }) =>
    height &&
    `
    height: ${height || 30}px;
    max-height: ${height || 30}px;
  `};
  width: ${({ width }) => width || "380px"};
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ marginbottom }) =>
    `${marginbottom > -1 ? marginbottom : 2}px`};
`;

export const InputWrapper = styled.div`
  height: inherit;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const StyledLabel = styled.label`
  flex: ${({ labelFlex }) => labelFlex || 0.8};
  overflow: hidden;
  line-height: 39.9999px;
  white-space: nowrap;
  margin-inline-end: 10px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  text-align: -webkit-auto;
  ${({ disabled }) => disabled && `color: rgba(0, 0, 0, 0.25)`};
`;

export const ErrorView = styled.span`
  /* height: 15px; */
  align-self: flex-end;
  display: block;
  color: red;
  font-size: 13px;
  font-family: Roboto;
  /* margin: 3px 0px; */
`;
