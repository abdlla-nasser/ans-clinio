import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import allergiesSetupReducer from "../../../Pages/AllergiesSetup/modules/reducer";
import appBaseReducer from "../../../Pages/BasePage/modules/reducer";
import consultationSetupReducer from "../../../Pages/ConsultationSetup/modules/reducer";
import insuranceCompaniesSetupReducer from "../../../Pages/InsuranceCompaniesSetup/modules/reducer";
import labelsReducer from "../../../global/reducers/labels";
import loginReducer from "../../../Pages/Login/modules/reducer";
import serviceGroupsReducer from "../../../Pages/ServiceGroups/modules/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["appBaseReducer"],
};

const rootReducer = combineReducers({
  allergiesSetupReducer,
  appBaseReducer,
  consultationSetupReducer,
  insuranceCompaniesSetupReducer,
  labelsReducer,
  loginReducer,
  serviceGroupsReducer,
});

export default persistReducer(persistConfig, rootReducer);
