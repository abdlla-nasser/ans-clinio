import { rtl_languages_shortcode } from "../../../utils/getCountry";
import {
  GET_LANGUAGES_FINISHED,
  SET_DEFAULT_LANGUAGE_TO_BROWSER_LANGUAGE,
  CHANGE_APP_LANGUAGE,
} from "./types";
import { ON_LOGIN_SUCCESS } from "../../Login/modules/types";

const initialState = {
  language: undefined,
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

    case SET_DEFAULT_LANGUAGE_TO_BROWSER_LANGUAGE:
      const browserLang = navigator.language.slice(0, 2);
      const isR2l = rtl_languages_shortcode.includes(browserLang);
      const langObj = {
        r2l: isR2l,
        language_code: browserLang,
        name: "Default",
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

    default:
      return state;
  }
};
