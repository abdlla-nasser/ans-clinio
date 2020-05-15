import { ON_LOGIN_INPUT_CHANGED } from "./types";

const initialState = {
  username: undefined,
  password: undefined,
  usernameError: undefined,
  passwordError: undefined,
  formError: undefined,
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

    default:
      return state;
  }
};
