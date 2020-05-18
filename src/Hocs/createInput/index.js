import React from "react";
import { InputWrapper, ErrorView, StyledLabel, InputContainer } from "./styled";

export default function(Input) {
  return function({
    width,
    height,
    error,
    required = true,
    hidden,
    label,
    marginbottom,
    labelFlex,
    inputWrapperStyle,
    containerStyle,
    errorStyle,
    labelStyle,
    inputProps = {
      onChange: undefined,
      value: undefined,
      disabled: false,
      height: undefined,
      flex: undefined,
      useTextArea: false
    }
  }) {
    return (
      <InputContainer
        height={inputProps.height ? inputProps.height + 8 : height}
        marginbottom={marginbottom}
        hidden={hidden}
        width={width}
        style={containerStyle}
      >
        <InputWrapper style={inputWrapperStyle}>
          {label && (
            <StyledLabel
              labelFlex={labelFlex}
              children={`${label}: `}
              style={labelStyle}
              disabled={inputProps.disabled}
            />
          )}
          <Input {...inputProps} />
        </InputWrapper>
        {error && required && <ErrorView children={error} style={errorStyle} />}
      </InputContainer>
    );
  };
}
