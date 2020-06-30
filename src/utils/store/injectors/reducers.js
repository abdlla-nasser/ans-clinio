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
import systemServicesReducer from "../../../Pages/SystemServices/modules/reducer";
import medicationsSetupReducer from "../../../Pages/MedicationsSetup/modules/reducer";
import languagesSetupReducer from "../../../Pages/LanguagesSetup/modules/reducer";

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
  languagesSetupReducer,
  loginReducer,
  medicationsSetupReducer,
  regionsSetupReducer,
  serviceGroupsReducer,
  systemServicesReducer,
});

export default persistReducer(persistConfig, rootReducer);
