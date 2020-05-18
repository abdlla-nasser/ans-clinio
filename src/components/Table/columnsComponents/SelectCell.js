import React from "react";
import { matchErrors } from "./utils";
import Select from "../../Select/withlabel";

const SelectCell = ({
  rowKey,
  selectedRow,
  isEditing,
  onChange,
  errors,
  renderCell,
  ...others
}) => record => {
  const { [rowKey]: rowKeyValue } = record;
  const { dIdxs, onInputChanged, listName, listData } = renderCell;
  const isSameEditableRow = isEditing && selectedRow === rowKeyValue;
  const isString = typeof dIdxs === "string";
  const list = others && listName ? others[listName] : listData;
  if (isSameEditableRow) {
    const errs = matchErrors(errors, dIdxs, isString);

    const handleChange = value => {
      const params = {
        name: dIdxs,
        value,
        key: rowKeyValue
      };

      return onInputChanged
        ? onInputChanged({
            onChange,
            record,
            ...params
          })
        : onChange(params);
    };

    const value = getProperValue(list, record[dIdxs]);

    return (
      <Select
        marginbottom={0}
        height={25}
        width="100%"
        inputWrapperStyle={{
          justifyContent: "center"
        }}
        error={errs}
        inputProps={{
          options: list,
          loading: !list,
          value: value,
          onChange: handleChange,
          flex: 0.75,
          size: "small",
          className: "edit-td-input",
          defaultValue: value
        }}
      />
    );
  }

  const item =
    list && record[dIdxs]
      ? list.find(item => item.key === record[dIdxs])
      : { value: "-" };
  return item && item.value ? item.value : "-";
};

const getProperValue = (list = [], valueOfDataIndex) => {
  let finalValue = "";
  if (list) {
    const isListContainerValue = list.some(
      item => item.key === valueOfDataIndex
    );
    finalValue = isListContainerValue ? valueOfDataIndex : finalValue;
  }
  return finalValue;
};

export default SelectCell;
