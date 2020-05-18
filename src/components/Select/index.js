import React from "react";
import { Option, StyledSelect } from "./styled";

const { useCallback, memo } = React;

const RenderSelect = ({
  defaultValue,
  size = "default",
  value,
  loading,
  options,
  width,
  height,
  flex,
  style,
  noBorder,
  setMarkedBorder,
  borderColor,
  firstActiveValue,
  onSaveItem,
  onTypedValueChanged,
  ...props
}) => {
  const onInputKeyDown = useCallback(
    ({ key, target: { value } }) => {
      if (key === "Enter" && onSaveItem) {
        onSaveItem(value);
      }
      if (onTypedValueChanged) {
        onTypedValueChanged(value);
      }
    },
    [onSaveItem, onTypedValueChanged]
  );

  return (
    <StyledSelect
      defaultValue={defaultValue}
      size={size}
      loading={loading}
      value={value}
      width={width}
      height={height}
      flex={flex}
      noBorder={noBorder}
      style={style}
      setMarkedBorder={setMarkedBorder}
      borderColor={borderColor}
      firstActiveValue={`${firstActiveValue}`}
      showSearch
      filterOption
      optionFilterProp="children"
      onInputKeyDown={onInputKeyDown}
      {...props}
    >
      {options &&
        options.map(option => (
          <Option key={option.key} value={option.key}>
            {option.value}
          </Option>
        ))}
    </StyledSelect>
  );
};

export default memo(RenderSelect);
