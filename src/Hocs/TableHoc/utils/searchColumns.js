import React from "react";
import { StyledButton, RenderView } from "./styled";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import Icon from "../../../components/Icon";
import Input from "../../../components/Input";

export default ({ clearFilter, fetchData, isRtl }) => {
  const onChange = (setSelectedKeys) => (value) =>
    setSelectedKeys(value ? [value] : []);

  const handleSearch = (selectedKeys, confirm) => confirm;

  const handleReset = (clearFilters) => () => {
    clearFilters();
    clearFilter();
    fetchData();
  };

  // const filterIcon = () => <Icon marginend="0" type="search" color="#fff" />;
  const filterIcon = () => <SearchOutlined />;

  return {
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <RenderView>
        <Input
          width="188px"
          marginbottom={8}
          inputProps={{
            value: selectedKeys[0],
            onChange: onChange(setSelectedKeys),
            onPressEnter: handleSearch(selectedKeys, confirm),
          }}
        />

        <StyledButton
          type="primary"
          onClick={handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          children={isRtl ? "بحث" : "Search"}
        />

        <StyledButton
          onClick={handleReset(clearFilters)}
          children={isRtl ? "اعادة" : "Reset"}
          size="small"
        />
      </RenderView>
    ),
    filterIcon,
  };
};
