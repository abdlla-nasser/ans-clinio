import React from "react";
import { matchErrors } from "./utils";
import { renderPopover } from "./utils";
import Input from "../../Input";
import styled from "styled-components";

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
    isRtl,
    langCode,
    onInputChanged,
    setValueLowerCase,
    textValue,
    getDeepValueInSingleDIndx,
    useHover,
    dIXForHover,
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
      const params = {
        name,
        value: setValueLowerCase ? value.toLowerCase() : value,
        key: rowKeyValue,
        ...(langCode ? { langCode } : null),
      };
      return onInputChanged
        ? onInputChanged({
            onChange,
            ...params,
          })
        : onChange(params);
    };

    const errs = matchErrors(
      errors,
      dIdxs,
      isString,
      getDeepValueInSingleDIndx,
      langCode
    );
    const names = isString ? [dIdxs] : dIdxs;
    const disabled =
      isString && (dIdxs === rowKey || dIdxs === "idValue") && !record.isNew;

    return (
      <>
        <Input
          width="100%"
          containerStyle={{ padding: "0 5px" }}
          inputProps={{
            onChange: (e) =>
              langCode ? handleChange(e, langCode) : handleChange(e),
            name: names,
            value: cellValue,
            style: { textAlign: isRtl ? "right" : "left" },
            disabled,
          }}
        />
        {errs && <ErrorView children={errs} />}
      </>
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

const ErrorView = styled.span`
  height: 13px;
  display: block;
  color: red;
  font-size: 13px;
  font-family: Roboto;
  margin: 3px 0px;
`;
