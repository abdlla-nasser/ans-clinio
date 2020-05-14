import { CHANGE_APP_LANGUAGE } from "./types";

const initialState = {
  language: "en",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_LANGUAGE:
      return {
        ...state,
        language: action.selectedLang,
      };

    default:
      return state;
  }
};
