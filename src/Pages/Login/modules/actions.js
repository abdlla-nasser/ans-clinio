import {
  ON_LOGIN_INPUT_CHANGED,
  ON_LOGIN,
  ON_LOGIN_SUCCESS,
  ON_LOGIN_FAILURE,
} from "./types";

export const onInputChange = ({ name, value }) => ({
  type: ON_LOGIN_INPUT_CHANGED,
  name,
  value,
});

export const onLogin = (actionToNavigate) => ({
  type: ON_LOGIN,
  actionToNavigate,
});

export const onLoginSuccess = (userData) => ({
  type: ON_LOGIN_SUCCESS,
  userData,
});

export const onLoginFailure = (errorValues) => ({
  type: ON_LOGIN_FAILURE,
  errorValues,
});
