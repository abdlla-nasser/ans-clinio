import React from "react";
import Checkbox from "antd/lib/checkbox";

const CheckBoxView = ({
  rowKey,
  selectedRow,
  isEditing,
  onChange,
  renderCell,
}) => ({ [rowKey]: rowKeyValue, ...record }) => {
  const { dIdxs, checkedValue, getValueForChangedInput } = renderCell;
  const value = record[dIdxs];
  const isSameEditableRow = isEditing && selectedRow === rowKeyValue;
  const handleChange = ({ target: { checked } }) => {
    if (isSameEditableRow) {
      const checkValue =
        getValueForChangedInput && getValueForChangedInput(checked);
      onChange({
        name: dIdxs,
        value: checkValue ? checkValue : checked ? true : false,
        key: rowKeyValue,
      });
    }
  };

  return (
    <Checkbox
      value={dIdxs}
      checked={value === (checkedValue || true)}
      onChange={handleChange}
    />
  );
};

export default CheckBoxView;
