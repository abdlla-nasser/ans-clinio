import React from "react";
import Input from "antd/lib/input";
import styled from "styled-components";
import createInput from "../../Hocs/createInput";

const { TextArea } = Input;

const renderFlex = flex => (typeof flex === "number" ? flex : 1.5);

export const StyledInput = styled(Input)`
  height: ${({ height }) => `${height || 30}px`};
  flex: ${({ flex }) => renderFlex(flex)};
`;

export const StyledTextArea = styled(TextArea)`
  flex: ${({ flex }) => renderFlex(flex)};
  resize: none;
`;

function RenderInput({ useTextArea, onChange, ...props }) {
  const Component = useTextArea ? StyledTextArea : StyledInput;

  function handleChange({ target: { value, name } }) {
    if (props.name) {
      return onChange({ name, value });
    }
    return onChange(value);
  }

  return <Component {...props} onChange={handleChange} />;
}

export default createInput(RenderInput);
