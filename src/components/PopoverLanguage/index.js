import React from 'react';
import { connect } from 'react-redux';
import Popover from 'antd/es/popover';
import Input from '../Input';
import {
  ButtonContainer,
  TextValue,
  StyledIcon,
  ClearButton,
  ErrorView
} from './styled';

const { Fragment, useState } = React;

const PopoverLanguage = ({
  oneForKey,
  disabled,
  values = [],
  onChange,
  placeholder,
  names,
  buttonContainerStyle,
  isRtl,
  error,
  userErrorSpace,
  onChangeUseInputLang
}) => {
  const [visible, updateHandler] = useState(false);
  const twoInputs = values.length > 1;
  const twoNames = Array.isArray(names) && names.length > 1;
  const mainValue = twoInputs
    ? isRtl
      ? values[1]
      : values[0]
    : values[0]
    ? values[0]
    : placeholder;

  const hide = () => updateHandler(false);

  const content = (
    <Fragment>
      {Input({
        labelFlex: 0.2,
        label: 'E',
        inputProps: {
          onChange: e => (onChangeUseInputLang ? onChange(e, 1) : onChange(e)),
          name: twoNames ? names[0] : names,
          value: twoInputs ? values[0] : values,
          style: { ...inputStyle, textAlign: 'left' },
          disabled
        }
      })}

      {!oneForKey &&
        Input({
          labelFlex: 0.2,
          label: 'عربي',
          inputProps: {
            onChange: e =>
              onChangeUseInputLang ? onChange(e, 2) : onChange(e),
            name: twoNames ? names[1] : names,
            value: values[1],
            style: inputStyle,
            disabled
          }
        })}
      <ClearButton children={isRtl ? 'حسنا' : 'ok'} onClick={hide} />
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

const inputStyle = {
  marginBottom: '3px',
  textAlign: 'right'
};

const mapStateToProps = ({ loginReducer: { privData } }) => ({
  isRtl: privData && privData.language_id === 2
});

export default connect(
  mapStateToProps,
  null
)(PopoverLanguage);
