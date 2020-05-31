import React from "react";
import Tiptool from "antd/lib/tooltip";
import { ActionContainer, StyledIcon } from "./styled";
import DetailsIcon from "../../../assets/svgs/details.svg";

export default (openModal, rowKey) => (props) => {
  function onPressInfoIcon() {
    openModal(props[rowKey]);
  }

  return (
    <ActionContainer>
      <Tiptool placement="bottomLeft" title="show details">
        <StyledIcon onClick={onPressInfoIcon} src={DetailsIcon} />
      </Tiptool>
    </ActionContainer>
  );
};
