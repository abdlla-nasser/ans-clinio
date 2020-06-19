import React from "react";
import { Link } from "react-router-dom";
import Tiptool from "antd/lib/tooltip";
import { ActionContainer, StyledIcon } from "./styled";
import DetailsIcon from "../../../assets/svgs/details.svg";
import GoToIcon from "../../../assets/svgs/goToSvg.svg";

export default ({ rowData, navDetails }) => {
  const { pathName, attrName } = navDetails;
  return (
    <ActionContainer>
      <Tiptool placement="bottomLeft" title="See more">
        <Link
          to={{
            pathname: `/${pathName}`,
            state: { fromPrevPage: rowData[attrName] },
          }}
        >
          <StyledIcon src={GoToIcon} />
        </Link>
      </Tiptool>
    </ActionContainer>
  );
};
