import { CHANGE_APP_LANGUAGE } from "./types";

export const changeAppLanguage = (selectedLang) => ({
  type: CHANGE_APP_LANGUAGE,
  selectedLang,
});
