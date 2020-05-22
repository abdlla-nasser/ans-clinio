import { GET_LANGUAGES_FINISHED, CHANGE_APP_LANGUAGE } from "./types";
import { ON_LOGIN_SUCCESS } from "../../Login/modules/types";

const initialState = {
  language: {
    r2l: false,
    language_code: "en",
    name: "English",
  },
  Active_Flag: undefined,
  Role: undefined,
  email: undefined,
  languages: [],
  privileges: [],
  _id: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.userData,
      };

    case GET_LANGUAGES_FINISHED:
      const langs = action.data || [];
      return {
        ...state,
        languages: langs,
      };

    case CHANGE_APP_LANGUAGE:
      return {
        ...state,
        language: action.selectedLang,
      };

    default:
      return state;
  }
};
