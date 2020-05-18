import React from "react";
import Flex from "../../Flex";
import PopOver from "antd/lib/popover";

export const matchErrors = (errors, dIdxs, isString) => {
  let result;
  if (errors) {
    if (isString) {
      result = errors[dIdxs];
    } else {
      dIdxs.forEach((key) => {
        if (errors.hasOwnProperty(key)) {
          const error = errors[key];
          if (error) result = error;
        }
      });
    }
  }
  return result;
};

export const renderPopover = ({ dIdIx, dIdIxForOver, width, height }) => {
  return (record) => {
    const content = (
      <Flex height={height || "560px"} width={width || "520px"}>
        <Flex width={"240px" || width} height={"250px"} overflowY="auto">
          {record[dIdIxForOver || dIdIx]}
        </Flex>
      </Flex>
    );
    return (
      <PopOver
        placement="right"
        trigger="hover"
        content={content}
        destroyTooltipOnHide
      >
        {record[dIdIx]}
      </PopOver>
    );
  };
};
