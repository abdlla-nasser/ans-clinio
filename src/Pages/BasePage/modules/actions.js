import {
  GET_LANGUAGES,
  GET_LANGUAGES_FINISHED,
  SET_DEFAULT_LANGUAGE_TO_BROWSER_LANGUAGE,
  CHANGE_APP_LANGUAGE,
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
