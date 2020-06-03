import React from "react";
import { matchErrors } from "./utils";
import PopoverLanguage from "../../PopoverLanguage";
import { renderPopover } from "./utils";

const PopoverCell = ({
  rowKey,
  selectedRow,
  isEditing,
  onChange,
  errors,
  renderCell,
}) => (record) => {
  const {
    pedro,
    dIdxs,
    isRtl,
    onInputChanged,
    setValueLowerCase,
    onChangeUseInputLang,
    textValue,
    getDeepValueInSingleDIndx,
    useHover,
    dIXForHover,
    ...popOverProps
  } = renderCell;
  const { [rowKey]: rowKeyValue } = record;
  const isSameEditableRow = isEditing && selectedRow === rowKeyValue;
  const isString = typeof dIdxs === "string";
  let cellValue = "";

  if (getDeepValueInSingleDIndx) {
    const { val } = getDeepValueInSingleDIndx({
      values: record[dIdxs] || "",
    });
    cellValue = val || "";
  } else if (isString) {
    cellValue = record[dIdxs] || "";
  } else {
    cellValue = record[dIdxs[0]] || "";
  }

  if (isSameEditableRow) {
    const handleChange = ({ name, value }, langCode) => {
      console.log("langCode: ", langCode);
      const params = {
        name,
        value: setValueLowerCase ? value.toLowerCase() : value,
        key: rowKeyValue,
        ...(onChangeUseInputLang ? { langCode } : null),
      };
      return onInputChanged
        ? onInputChanged({
            onChange,
            ...params,
          })
        : onChange(params);
    };

    const errs = matchErrors(errors, dIdxs, isString);

    return (
      <PopoverLanguage
        disabled={
          isString && (dIdxs === rowKey || dIdxs === "idValue") && !record.isNew
        }
        isRtl={isRtl}
        pedro={pedro}
        value={cellValue}
        names={isString ? [dIdxs] : dIdxs}
        error={errs}
        onChange={handleChange}
        {...popOverProps}
      />
    );
  }
  return useHover
    ? renderPopover({
        dIdIx: dIdxs,
        dIdIxForOver: dIXForHover,
        width: "540px",
        height: "480px",
      })(record)
    : textValue
    ? textValue
    : cellValue;
};
export default PopoverCell;
