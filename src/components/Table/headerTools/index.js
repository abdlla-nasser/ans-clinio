import React from "react";
import { ToolsContainer } from "../styled";
import Icon from "../../Icon";
import loadable from "../../Loadable";
import Flex from "../../Flex";
import { useRequestLabels } from "../../../utils/customUseHooks";

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
  onChangeLastColLang,
  langSelectOptions,
  langSelectValue,
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
  withInfo = true,
  withPrinter = true,
  excelView,
}) => {
  const clickable = !disabled && isThereSelectedRow;
  const isunClickableField = disabled || !isThereSelectedRow;
  const { labels } = useRequestLabels("tableHoc");

  return (
    <ToolsContainer justify={langSelectOptions ? "space-between" : "center"}>
      <Flex width="185px" justify="space-between">
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
      </Flex>

      {langSelectOptions && (
        <Select
          width={200}
          placeholder={labels && labels.lstcollang}
          size="default"
          value={langSelectValue}
          // disabled={disabled}
          options={langSelectOptions}
          onChange={onChangeLastColLang}
        />
      )}
    </ToolsContainer>
  );
};
