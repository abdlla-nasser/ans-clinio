import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";

import Flex from "../../components/Flex";
import { useDispatch } from "react-redux";
import { Menu, Dropdown } from "antd";

const ConsultationSetup = ({ children }) => {
  const dispatch = useDispatch();
  const onClick = ({ key }) => {
    dispatch({
      type: "SELECT_LAST_COLUMN_LANGUAGE",
      key,
    });
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="french">French</Menu.Item>
      <Menu.Item key="spanish">Spanish</Menu.Item>
      <Menu.Item key="italian">Italian</Menu.Item>
      <Menu.Item key="german">German</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Flex justify="space-between">
        <h1>Consultation Setup</h1>
        <Dropdown overlay={menu}>
          <span onClick={(e) => e.preventDefault()}>Select Language</span>
        </Dropdown>
      </Flex>
      {children}
    </>
  );
};

export default WithTableHoc({
  WrappedComponent: ConsultationSetup,
  mapStateToProps,
  mapDispatchToProps,
  actions,
  noFetchData: false,
  renderColumns: columns,
  pageName: "consultationSetup",
  rowKey: "idValue",
});
