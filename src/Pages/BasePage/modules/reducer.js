import { CHANGE_APP_LANGUAGE } from "./types";
import { ON_LOGIN_SUCCESS } from "../../Login/modules/types";

const initialState = {
  language: "en",
  Active_Flag: undefined,
  Role: undefined,
  email: undefined,
  languages: [],
  privileges: [],
  _id: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_LANGUAGE:
      return {
        ...state,
        language: action.selectedLang,
      };

    case ON_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.userData,
      };

    default:
      return state;
  }
};
