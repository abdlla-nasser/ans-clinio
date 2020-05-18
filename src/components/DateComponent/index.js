import React from "react";
import DatePicker from "antd/lib/date-picker";

export const DATE_FORMAT = "DD-MM-YYYY";
export const TYPE = DatePicker;

const DateComponent = ({
  type,
  defaultValue,
  onChange,
  value,
  disabled,
  format,
  name,
  size = "small",
  ...otherProps
}) => {
  const Component = type || TYPE.RangePicker;
  return (
    <Component
      defaultValue={defaultValue}
      format={format || DATE_FORMAT}
      onChange={onChange}
      value={value}
      size={size}
      disabled={disabled}
      name={name}
      {...otherProps}
    />
  );
};

export default DateComponent;
