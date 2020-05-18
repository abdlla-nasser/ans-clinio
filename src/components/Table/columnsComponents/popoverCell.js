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
    dIdxs,
    onInputChanged,
    setValueLowerCase,
    onChangeUseInputLang,
    textValue,
    getDeepValuesInSingleDIndx,
    useHover,
    dIXForHover,
    ...popOverProps
  } = renderCell;
  const { [rowKey]: rowKeyValue } = record;
  const isSameEditableRow = isEditing && selectedRow === rowKeyValue;
  const isString = typeof dIdxs === "string";
  let v1 = "",
    v2 = "",
    oneForKey = false;

  if (getDeepValuesInSingleDIndx) {
    const { val1, val2 } = getDeepValuesInSingleDIndx({
      values: record[dIdxs],
    });

    v1 = val1 || "";
    v2 = val2 || "";
  } else if (isString) {
    v1 = record[dIdxs] || "";
    oneForKey = true;
  } else {
    v1 = record[dIdxs[0]] || "";
    v2 = record[dIdxs[1]] || "";
  }

  if (isSameEditableRow) {
    const handleChange = ({ name, value }, langId) => {
      const params = {
        name,
        value: setValueLowerCase ? value.toLowerCase() : value,
        key: rowKeyValue,
        ...(onChangeUseInputLang ? { langId } : null),
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
        oneForKey={oneForKey}
        disabled={
          isString && (dIdxs === rowKey || dIdxs === "idValue") && !record.isNew
        }
        values={[v1, v2]}
        names={isString ? [dIdxs] : dIdxs}
        error={errs}
        onChange={handleChange}
        onChangeUseInputLang={onChangeUseInputLang}
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
    : `${v1} ${v2 ? `/ ${v2}` : ""}`;
};
export default PopoverCell;
