import createFloatLabelInput from "../FloatInputLabel";
import Select from "./index";

export default createFloatLabelInput({
  InputComponent: Select,
  setFloatActive: true,
  initialInputStyle: {
    border: "0px"
  }
});
