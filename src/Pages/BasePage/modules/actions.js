import {
  GET_LANGUAGES,
  GET_LANGUAGES_FINISHED,
  CHANGE_APP_LANGUAGE,
} from "./types";

export const getAppLanguages = () => ({
  type: GET_LANGUAGES,
});

export const getAppLanguagesFinished = (data) => ({
  type: GET_LANGUAGES_FINISHED,
  data,
});

export const changeAppLanguage = (selectedLang) => ({
  type: CHANGE_APP_LANGUAGE,
  selectedLang,
});
