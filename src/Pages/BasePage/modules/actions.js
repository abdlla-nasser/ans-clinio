import {
  GET_LANGUAGES,
  GET_LANGUAGES_FINISHED,
  SET_DEFAULT_LANGUAGE_TO_BROWSER_LANGUAGE,
  CHANGE_APP_LANGUAGE,
  SET_USER_TOKEN,
  ON_LOGOUT,
} from "./types";

export const getAppLanguages = () => ({
  type: GET_LANGUAGES,
});

export const getAppLanguagesFinished = (data) => ({
  type: GET_LANGUAGES_FINISHED,
  data,
});

export const setDefaultLangToBrowserLang = () => ({
  type: SET_DEFAULT_LANGUAGE_TO_BROWSER_LANGUAGE,
});

export const changeAppLanguage = (selectedLang) => ({
  type: CHANGE_APP_LANGUAGE,
  selectedLang,
});

export const setUserToken = (token) => ({
  type: SET_USER_TOKEN,
  token,
});

export const logout = () => ({
  type: ON_LOGOUT,
});
