import React from "react";
import Menu from "antd/lib/menu";
import SettingOutlined from "@ant-design/icons/SettingOutlined";
import FileTextOutlined from "@ant-design/icons/FileTextOutlined";
import StockOutlined from "@ant-design/icons/StockOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";

import "./index.css";

const { SubMenu, ItemGroup, Item } = Menu;

const HeaderMenu = () => {
  //   state = {
  //     current: "mail",
  //   };

  //   handleClick = (e) => {
  //     console.log("click ", e);
  //     this.setState({
  //       current: e.key,
  //     });
  //   };

  return (
    <Menu
      //   onClick={this.handleClick}
      //   selectedKeys={[this.state.current]}
      mode="horizontal"
    >
      <SubMenu icon={<SettingOutlined />} title="Setup">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
        <ItemGroup title="Item 2">
          <Item key="setting:3">Option 3</Item>
          <Item key="setting:4">Option 4</Item>
        </ItemGroup>
      </SubMenu>

      <SubMenu icon={<FileTextOutlined />} title="Financial Reports">
        <ItemGroup title="Item 1">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </ItemGroup>
        <ItemGroup title="Item 2">
          <Item key="setting:3">Option 3</Item>
          <Item key="setting:4">Option 4</Item>
        </ItemGroup>
      </SubMenu>

      <SubMenu icon={<StockOutlined />} title="Statistics">
        <ItemGroup title="Item 1">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </ItemGroup>
        <ItemGroup title="Item 2">
          <Item key="setting:3">Option 3</Item>
          <Item key="setting:4">Option 4</Item>
        </ItemGroup>
      </SubMenu>

      <SubMenu icon={<UserOutlined />} title="Admin">
        <ItemGroup title="Item 1">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </ItemGroup>
        <ItemGroup title="Item 2">
          <Item key="setting:3">Option 3</Item>
          <Item key="setting:4">Option 4</Item>
        </ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default HeaderMenu;
