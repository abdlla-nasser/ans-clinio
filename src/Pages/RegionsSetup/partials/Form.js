import React from "react";
import { connect } from "react-redux";
import Select from "../../../components/Select/withlabel";
import Flex from "../../../components/Flex";
import { IconContainer } from "../../../components/Icon/styled";
import Icon from "../../../components/Icon";

const { memo } = React;

const FormView = () => {
  return (
    <Flex justify="center" margin="0 0 10px 0">
      <Select
        label="Country"
        labelFlex={0.4}
        width="300px"
        inputProps={{
          options: [{ key: 1, value: "lwe" }],
        }}
      />
      <IconContainer onClick={() => console.log("DSFDFs")}>
        <Icon type="search" size={20} color="white" margintop={-1} />
      </IconContainer>
    </Flex>
  );
};

export default connect()(memo(FormView));
