import React from "react";
import { ToolsContainer } from "../styled";
import Icon from "../../Icon";
import loadable from "../../Loadable";
const Select = loadable(() => import("../../Select"));

const MARGIN_END = 7;
const SIZE = 24;

function onClick(clickable, callback) {
  return function () {
    if (clickable && callback) {
      callback();
    }
  };
}

export default ({
  onPressEditOrCancel,
  isAddingRecord,
  isUpdatingRecord,
  onPressSaveOrEdit,
  onPressPrint,
  onPressAdd,
  onPressDelete,
  canInsert,
  canDelete,
  hideEditSaveIcon,
  hidePrinterInformationIcon,
  isEditing,
  disabled,
  isThereSelectedRow,
  headerSelectOptions,
  onChangeHeaderSelect,
  headerSelectNewValue,
  withInfo = true,
  withPrinter = true,
  excelView,
}) => {
  const clickable = !disabled && isThereSelectedRow;
  const isunClickableField = disabled || !isThereSelectedRow;
  return (
    <ToolsContainer
      justify={headerSelectOptions ? "space-between" : "center"}
      padding="0px 10px"
    >
      {headerSelectOptions && (
        <Select
          width={400}
          placeholder="Select"
          size="default"
          value={headerSelectNewValue === "-" ? "" : headerSelectNewValue}
          disabled={disabled}
          options={headerSelectOptions}
          onChange={onChangeHeaderSelect}
        />
      )}

      <div>
        {(isAddingRecord || isUpdatingRecord) && (
          <Icon
            type="save"
            size={SIZE}
            disabled={isunClickableField}
            marginend={MARGIN_END}
            onClick={onClick(clickable, onPressSaveOrEdit)}
          />
        )}

        <Icon
          type={isUpdatingRecord || isAddingRecord ? "close-circle" : "edit"}
          size={SIZE}
          disabled={isunClickableField}
          marginend={MARGIN_END}
          onClick={onClick(clickable, onPressEditOrCancel)}
        />

        {canInsert && !isAddingRecord && (
          <Icon
            type="plus-circle"
            disabled={disabled}
            marginend={MARGIN_END}
            size={SIZE}
            onClick={onPressAdd}
          />
        )}

        {canDelete && (
          <Icon
            disabled={isunClickableField}
            marginend={MARGIN_END}
            size={SIZE}
            type="delete"
            onClick={onClick(clickable, onPressDelete)}
          />
        )}

        {excelView && excelView}

        {!hidePrinterInformationIcon && withPrinter && (
          <Icon
            type="printer"
            size={SIZE}
            marginend={MARGIN_END}
            disabled={disabled}
            onClick={onPressPrint}
          />
        )}

        {!hidePrinterInformationIcon && withInfo && (
          <Icon
            size={SIZE}
            disabled={isunClickableField}
            type="info-circle"
            onClick={onClick(clickable)}
          />
        )}
      </div>
    </ToolsContainer>
  );
};
