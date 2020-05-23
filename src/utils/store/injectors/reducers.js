import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import labelReducer from "../../../global/reducers/labels";
import appBaseReducer from "../../../Pages/BasePage/modules/reducer";
import loginReducer from "../../../Pages/Login/modules/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["appBaseReducer"],
};

const rootReducer = combineReducers({
  appBaseReducer,
  labelReducer,
  loginReducer,
});

export default persistReducer(persistConfig, rootReducer);
