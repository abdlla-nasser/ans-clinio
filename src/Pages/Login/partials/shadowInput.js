import React from "react";
import styled from "styled-components";
import CreateShadowField from "../../../Hocs/FieldShadow";

const Input = styled.input`
  border: 0px;
  outline: 0;
  height: 34px;
  min-width: 340px;
  max-width: 345px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.31;
  color: #95b6e2;
  ::placeholder {
    opacity: 0.5;
  }
  &:disabled {
    background-color: transparent;
    cursor: pointer;
  }
`;

export default ({
  value,
  onChange,
  placeholder,
  disabled,
  type = "text",
  autocomplete,
  ...otherProps
}) =>
  CreateShadowField({
    ...otherProps,
    children: (
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        autocomplete={autocomplete}
      />
    ),
  });
