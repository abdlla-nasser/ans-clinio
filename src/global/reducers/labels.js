import { GET_PAGE_LABELS_FINISHED } from "../types/labels";

const initialState = {
  loginLabels: undefined,
  consultationSetupLabels: undefined,
  insuranceCompaniesSetupLabels: undefined,
  allergiesSetupLabels: undefined,
  serviceGroupsLabels: undefined,
  countriesSetupLabels: undefined,
  regionsSetupLabels: undefined,
  areasSetupLabels: undefined,
  systemServicesLabels: undefined,
  medicationsSetupLabels: undefined,
  languagesSetupLabels: undefined,
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
