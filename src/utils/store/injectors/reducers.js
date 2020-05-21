import { combineReducers } from "redux";

import labelReducer from "../../../global/reducers/labels";
import appBaseReducer from "../../../Pages/BasePage/modules/reducer";
import loginReducer from "../../../Pages/Login/modules/reducer";

export default combineReducers({
  appBaseReducer,
  labelReducer,
  loginReducer,
});
