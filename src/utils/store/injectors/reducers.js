import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import allergiesSetupReducer from "../../../Pages/AllergiesSetup/modules/reducer";
import appBaseReducer from "../../../Pages/BasePage/modules/reducer";
import consultationSetupReducer from "../../../Pages/ConsultationSetup/modules/reducer";
import countriesSetupReducer from "../../../Pages/CountriesSetup/modules/reducer";
import insuranceCompaniesSetupReducer from "../../../Pages/InsuranceCompaniesSetup/modules/reducer";
import labelsReducer from "../../../global/reducers/labels";
import loginReducer from "../../../Pages/Login/modules/reducer";
import regionsSetupReducer from "../../../Pages/RegionsSetup/modules/reducer";
import serviceGroupsReducer from "../../../Pages/ServiceGroups/modules/reducer";
import areasSetupReducer from "../../../Pages/AreasSetup/modules/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["appBaseReducer"],
};

const rootReducer = combineReducers({
  allergiesSetupReducer,
  appBaseReducer,
  areasSetupReducer,
  consultationSetupReducer,
  countriesSetupReducer,
  insuranceCompaniesSetupReducer,
  labelsReducer,
  loginReducer,
  regionsSetupReducer,
  serviceGroupsReducer,
});

export default persistReducer(persistConfig, rootReducer);
