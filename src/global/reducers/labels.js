import { GET_PAGE_LABELS_FINISHED } from "../types/labels";

const initialState = {
  loginLabels: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGE_LABELS_FINISHED:
      return {
        ...state,
        ...action.pageLabels,
      };

    default:
      return state;
  }
};
