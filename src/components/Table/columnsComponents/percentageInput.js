import React from "react";
import InputNumber from "antd/es/input-number";

const InputNumberCell = ({
  rowKey,
  selectedRow,
  isEditing,
  onChange,
  renderCell
}) => record => {
  const { [rowKey]: rowKeyValue } = record;
  const { dIdxs, onInputChanged } = renderCell;
  const value = record[dIdxs];
  const isSameEditableRow = isEditing && selectedRow === rowKeyValue;
  if (isSameEditableRow) {
    const handleChange = value => {
      const params = {
        name: dIdxs,
        value,
        key: rowKeyValue
      };

      return onInputChanged
        ? onInputChanged({
            onChange,
            ...params
          })
        : onChange(params);
    };

    return (
      <InputNumber
        size="small"
        value={value || 0}
        formatter={value => `${value}%`}
        min={0}
        onChange={handleChange}
      />
    );
  }

  return value;
};

export default InputNumberCell;
