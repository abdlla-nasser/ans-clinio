import { combineReducers } from "redux";

import appBaseReducer from "../../../Pages/BasePage/modules/reducer";
import loginReducer from "../../../Pages/Login/modules/reducer";

export default combineReducers({
  appBaseReducer,
  loginReducer,
});
