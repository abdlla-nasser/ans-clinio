import React from "react";
import Select from "./index";
import Input from "../Input";
import { Separator, StyledButton, CenterContent } from "./styled";

const { useState, Fragment, useMemo, useCallback } = React;

const inputStyle = {
  width: "95%",
  containerStyle: { margin: "auto", marginBottom: "5px" }
};

const SelectWithAddItem = ({
  onAddItem,
  onChange,
  oneInput,
  value,
  dataOptions,
  height,
  ...otherProps
}) => {
  const [enInpValue, updateEnInputValue] = useState("");
  const [arInpValue, updateArInputValue] = useState("");
  const [isAdding, updateIsAdding] = useState(false);
  const [open, updateOpen] = useState(false);

  const { canInsert, data, multi, lines } = dataOptions || { data: [] };

  const onClose = useCallback(() => {
    updateEnInputValue("");
    updateArInputValue("");
    updateIsAdding(false);
    updateOpen(false);
  }, [updateEnInputValue, updateArInputValue, updateIsAdding, updateOpen]);

  const addItem = useCallback(() => {
    if (onAddItem && (enInpValue || arInpValue)) {
      if (oneInput) {
        onAddItem(enInpValue);
      } else {
        let enValue = enInpValue,
          arValue = arInpValue;
        if (!arValue) {
          arValue = enValue;
        }
        if (!enValue) {
          enValue = arValue;
        }
        onAddItem({
          description_p: enValue,
          description_s: arValue
        });
      }
    }
    onClose();
  }, [onAddItem, enInpValue, arInpValue, oneInput, onClose]);

  const onDropdownVisibleChange = useCallback(
    () => !isAdding && updateOpen(true),
    [isAdding, updateOpen]
  );

  const onPressAdd = useCallback(() => {
    updateOpen(true);
    updateIsAdding(true);
  }, [updateOpen, updateIsAdding]);

  const handleChange = useCallback(
    value => {
      if (onChange) {
        onChange(value);
        if (canInsert) {
          if (!multi) {
            updateIsAdding(false);
            updateOpen(false);
          }
        }
      }
    },
    [onChange, canInsert, multi, updateIsAdding, updateOpen]
  );

  const onMouseMove = useCallback(() => !open && updateOpen(true), [
    updateOpen,
    open
  ]);

  const onBlur = useCallback(() => {
    if (canInsert) {
      if (open) {
        updateOpen(true);
      }
    } else {
      updateOpen(false);
    }
  }, [canInsert, updateOpen, open]);

  const onInputKeyDown = useCallback(
    value => {
      if (canInsert) {
        if (oneInput) {
          onAddItem(value);
        } else {
          onAddItem({
            description_p: value,
            description_s: value
          });
        }
        onClose();
      }
    },
    [onAddItem, onClose, oneInput, canInsert]
  );

  const dropdownRender = menu => (
    <div onMouseLeave={onClose} onMouseMove={onMouseMove}>
      {menu}
      <Separator />
      {isAdding ? (
        <Fragment>
          <Input
            {...inputStyle}
            inputProps={{
              type: "text",
              size: "small",
              value: enInpValue,
              onPressEnter: addItem,
              onChange: updateEnInputValue,
              placeholder: "Add new Item"
            }}
          />
          {!oneInput && (
            <Input
              {...inputStyle}
              inputProps={{
                type: "text",
                size: "small",
                value: arInpValue,
                onChange: updateArInputValue,
                placeholder: "اضافة عنصر جديد",
                onPressEnter: addItem,
                style: {
                  textAlign: "right"
                }
              }}
            />
          )}

          <CenterContent>
            <StyledButton
              icon="save"
              disabled={!arInpValue && !enInpValue}
              onClick={addItem}
              type="primary"
              size="small"
              children="Ok"
            />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <StyledButton
              icon="close"
              onClick={onClose}
              size="small"
              children="close"
            />
          </CenterContent>
        </Fragment>
      ) : (
        <StyledButton icon="plus" block onClick={onPressAdd} size="small">
          Add item
        </StyledButton>
      )}
    </div>
  );

  const normalizeValue = useMemo(() => {
    return multi
      ? Array.isArray(value)
        ? value
        : value
        ? [value]
        : []
      : value;
  }, [multi, value]);

  return (
    <Select
      {...otherProps}
      options={data}
      value={normalizeValue}
      open={open}
      height={(height || 29) * (lines || 1)}
      mode={multi ? "multiple" : "default"}
      onDropdownVisibleChange={onDropdownVisibleChange}
      {...(canInsert ? { dropdownRender } : null)}
      onChange={handleChange}
      onBlur={onBlur}
      onSaveItem={onInputKeyDown}
    />
  );
};

export default SelectWithAddItem;
