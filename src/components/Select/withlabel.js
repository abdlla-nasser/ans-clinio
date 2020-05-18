import React from "react";
import createInput from "../../Hocs/createInput";
import Select from "./index";

function RenderInput(props) {
  return <Select flex={1.65} {...props} />;
}

export default createInput(RenderInput);
