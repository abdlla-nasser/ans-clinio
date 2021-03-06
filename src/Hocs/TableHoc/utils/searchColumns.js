import React from "react";
import { StyledButton, RenderView } from "./styled";
import Icon from "../../../components/Icon";
import Input from "../../../components/Input";

export default ({ clearFilter, fetchData }) => {
  const onChange = (setSelectedKeys) => (value) =>
    setSelectedKeys(value ? [value] : []);

  const handleSearch = (selectedKeys, confirm) => confirm;

  const handleReset = (clearFilters) => () => {
    clearFilters();
    clearFilter();
    fetchData();
  };

  const filterIcon = () => <Icon marginend="0" type="search" color="#fff" />;

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
          children="Search"
        />

        <StyledButton
          onClick={handleReset(clearFilters)}
          children="Reset"
          size="small"
        />
      </RenderView>
    ),
    filterIcon,
  };
};
