import React from "react";
import BaseDropDown from "antd/lib/dropdown/dropdown";
import Menu from "antd/lib/menu";

const { Item: MenuItem } = Menu;

function createMenu({
  handleClick,
  selectedKeys,
  items,
  valuePropName,
  multiple,
  lastItem,
}) {
  return (
    <Menu
      onClick={handleClick}
      defaultSelectedKeys={selectedKeys}
      selectedKeys={selectedKeys}
      multiple={multiple}
    >
      {Array.isArray(items) &&
        items.map((item, idx) => {
          function handleOnClick() {
            if (typeof item === "object" && item.onClick) {
              item.onClick && item.onClick(item[valuePropName], idx);
            }
          }

          return (
            <MenuItem
              onClick={handleOnClick}
              key={idx}
              children={valuePropName ? item[valuePropName] : item}
            />
          );
        })}

      {lastItem && <MenuItem>{lastItem}</MenuItem>}
    </Menu>
  );
}

function DropDown({
  button,
  selectedKeys = [],
  dataSource,
  valuePropName,
  onSelect,
  renderMenu,
  buttonProps = null,
  multiple,
  disabled,
  lastItem,
}) {
  function handleClick({ key }) {
    return onSelect && onSelect(dataSource[+key]);
  }

  const menu = renderMenu
    ? renderMenu
    : createMenu({
        handleClick,
        items: dataSource,
        selectedKeys,
        valuePropName,
        multiple,
        lastItem,
      });

  return (
    <BaseDropDown
      trigger={["click"]}
      overlay={menu}
      placement="bottomCenter"
      disabled={disabled}
    >
      {button}
    </BaseDropDown>
  );
}

export const MenuView = Menu;
export default DropDown;
