import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appBaseReducer from "../../../Pages/BasePage/modules/reducer";
import consultationSetupReducer from "../../../Pages/ConsultationSetup/modules/reducer";
import labelsReducer from "../../../global/reducers/labels";
import loginReducer from "../../../Pages/Login/modules/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["appBaseReducer"],
};

const rootReducer = combineReducers({
  appBaseReducer,
  consultationSetupReducer,
  labelsReducer,
  loginReducer,
});

export default persistReducer(persistConfig, rootReducer);
