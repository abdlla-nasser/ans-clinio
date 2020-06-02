import React from "react";
import Popover from "antd/es/popover";
import Input from "../Input";
import {
  ButtonContainer,
  TextValue,
  StyledIcon,
  ConfirmButton,
  ErrorView,
} from "./styled";

const { Fragment, useState } = React;

const PopoverLanguage = ({
  disabled,
  value,
  onChange,
  placeholder,
  names,
  buttonContainerStyle,
  isRtl,
  error,
  userErrorSpace,
}) => {
  const [visible, updateHandler] = useState(false);
  const mainValue = value ? value : placeholder;
  const hide = () => updateHandler(false);

  console.log("value: ", value);

  const content = (
    <Fragment>
      <Input
        inputProps={{
          onChange: (e) => onChange(e),
          name: names,
          value: value,
          style: { textAlign: isRtl ? "right" : "left" },
          disabled,
        }}
      />
      <ConfirmButton children="OK" onClick={hide} />
    </Fragment>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      placement="bottom"
      visible={visible}
      onVisibleChange={updateHandler}
      destroyTooltipOnHide
    >
      <ButtonContainer style={buttonContainerStyle}>
        <TextValue>{mainValue}</TextValue>

        <StyledIcon type="down" />
      </ButtonContainer>

      {(error || userErrorSpace) && <ErrorView children={error} />}
    </Popover>
  );
};

export default PopoverLanguage;
