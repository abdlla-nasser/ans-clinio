import React from "react";
import Switch from "antd/lib/switch";

const SwitchView = ({
  rowKey,
  selectedRow,
  isEditing,
  onChange,
  renderCell,
}) => ({ [rowKey]: rowKeyValue, ...record }) => {
  const {
    dIdxs,
    checkedValue,
    getValueForChangedInput,
    checkedChildren,
    unCheckedChildren,
  } = renderCell;
  const value = record[dIdxs];
  const isSameEditableRow = isEditing && selectedRow === rowKeyValue;
  const handleChange = (checked) => {
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
    <Switch
      value={dIdxs}
      checked={value === (checkedValue || true)}
      onChange={handleChange}
      checkedChildren={checkedChildren}
      unCheckedChildren={unCheckedChildren}
    />
  );
};

export default SwitchView;
