import { ON_LOGIN_INPUT_CHANGED } from "./types";

export const onInputChange = ({ name, value }) => ({
  type: ON_LOGIN_INPUT_CHANGED,
  name,
  value,
});
