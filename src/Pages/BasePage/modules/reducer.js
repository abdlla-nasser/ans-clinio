import { rtl_languages_shortcode } from "../../../utils/getCountry";
import {
  GET_LANGUAGES_FINISHED,
  SET_DEFAULT_LANGUAGE_TO_BROWSER_LANGUAGE,
  CHANGE_APP_LANGUAGE,
  SET_USER_TOKEN,
  ON_LOGOUT,
} from "./types";
import { ON_LOGIN_SUCCESS } from "../../Login/modules/types";

const initialState = {
  language: {
    r2l: false,
    language_code: "en",
    name: "DefaultBrowserLanguage",
  },
  Active_Flag: undefined,
  Role: undefined,
  email: undefined,
  languages: [],
  privileges: [],
  _id: undefined,
  token: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.userData,
      };

    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case GET_LANGUAGES_FINISHED:
      const langs = action.data || [];
      return {
        ...state,
        languages: langs,
      };

    case SET_DEFAULT_LANGUAGE_TO_BROWSER_LANGUAGE:
      const browserLang = navigator.language.slice(0, 2);
      const isR2l = rtl_languages_shortcode.includes(browserLang);
      const langObj = {
        r2l: isR2l,
        language_code: browserLang,
        name: "DefaultBrowserLanguage",
      };
      return {
        ...state,
        language: langObj,
      };

    case CHANGE_APP_LANGUAGE:
      return {
        ...state,
        language: action.selectedLang,
      };

    case ON_LOGOUT:
      localStorage.clear();
      return initialState;

    default:
      return state;
  }
};
