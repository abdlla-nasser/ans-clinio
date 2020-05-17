import { ON_LOGIN_INPUT_CHANGED, ON_LOGIN, ON_LOGIN_FINISHED } from "./types";

const initialState = {
  username: undefined,
  password: undefined,
  usernameError: undefined,
  passwordError: undefined,
  formError: undefined,
  isSubmittingLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_LOGIN_INPUT_CHANGED:
      const fieldNameError = `${action.name}Error`;
      return {
        ...state,
        [action.name]: action.value,
        formError: undefined,
        [fieldNameError]: undefined,
      };

    case ON_LOGIN:
      return {
        ...state,
        isSubmittingLogin: true,
      };

    case ON_LOGIN_FINISHED:
      return {
        ...state,
        isSubmittingLogin: false,
        ...action.newStateValues,
      };

    default:
      return state;
  }
};
