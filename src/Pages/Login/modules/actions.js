import { ON_LOGIN_INPUT_CHANGED, ON_LOGIN, ON_LOGIN_FINISHED } from "./types";

export const onInputChange = ({ name, value }) => ({
  type: ON_LOGIN_INPUT_CHANGED,
  name,
  value,
});

export const onClickLogin = (navigateTo) => ({
  type: ON_LOGIN,
  navigateTo,
});

export const onClickLoginFinished = (newStateValues) => ({
  type: ON_LOGIN_FINISHED,
  newStateValues,
});
