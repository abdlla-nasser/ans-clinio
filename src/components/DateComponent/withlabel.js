import moment from "moment";
import createInputWithLabel from "../../Hocs/createInput";
import DateInput, { DATE_FORMAT, TYPE } from "./index";

function RenderInput({ value, ...props }) {
  let inputValue = value;
  if (value) {
    inputValue =
      typeof value === "string"
        ? moment(value, props.format || DATE_FORMAT)
        : value;
  } else inputValue = null;

  return DateInput({
    size: "default",
    value: inputValue,
    type: TYPE,
    ...props
  });
}

export default createInputWithLabel(RenderInput);
