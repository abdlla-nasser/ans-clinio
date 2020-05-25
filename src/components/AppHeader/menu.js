import React from "react";
import Menu from "antd/lib/menu";
import Icon from "../Icon";
import "./index.css";
import { StyledMenu } from "./styled";

const { memo } = React;
const { SubMenu, ItemGroup, Item } = Menu;

const SubmenuTitle = ({ title }) => (
  <span>
    {title}
    <Icon
      type="down"
      marginend="0"
      marginstart="10px"
      color="unset"
      marginright={1}
    />
  </span>
);

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
    <StyledMenu
      //   onClick={this.handleClick}
      //   selectedKeys={[this.state.current]}
      mode="horizontal"
    >
      <SubMenu title={<SubmenuTitle title="Setup" />}>
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
        <ItemGroup title="Item 2">
          <Item key="setting:3">Option 3</Item>
          <Item key="setting:4">Option 4</Item>
        </ItemGroup>
      </SubMenu>
      <SubMenu title={<SubmenuTitle title="Transactions" />}>
        <ItemGroup title="Item 1">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </ItemGroup>
        <ItemGroup title="Item 2">
          <Item key="setting:3">Option 3</Item>
          <Item key="setting:4">Option 4</Item>
        </ItemGroup>
      </SubMenu>
      <SubMenu title={<SubmenuTitle title="Financial Reports" />}>
        <ItemGroup title="Item 1">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </ItemGroup>
        <ItemGroup title="Item 2">
          <Item key="setting:3">Option 3</Item>
          <Item key="setting:4">Option 4</Item>
        </ItemGroup>
      </SubMenu>
      <SubMenu title={<SubmenuTitle title="Admin" />}>
        <ItemGroup title="Item 1">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </ItemGroup>
        <ItemGroup title="Item 2">
          <Item key="setting:3">Option 3</Item>
          <Item key="setting:4">Option 4</Item>
        </ItemGroup>
      </SubMenu>
    </StyledMenu>
  );
};

export default memo(HeaderMenu);
