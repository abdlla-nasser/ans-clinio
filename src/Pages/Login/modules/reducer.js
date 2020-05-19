import {
  ON_LOGIN_INPUT_CHANGED,
  ON_LOGIN,
  ON_LOGIN_SUCCESS,
  ON_LOGIN_FAILURE,
} from "./types";

const initialState = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: "",
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

    case ON_LOGIN_SUCCESS:
      return {
        ...state,
        isSubmittingLogin: false,
      };

    case ON_LOGIN_FAILURE:
      return {
        ...state,
        isSubmittingLogin: false,
        ...action.errorValues,
      };

    default:
      return state;
  }
};
