import { combineReducers } from "redux";
import accountReducer from "./account";
import loadingReducer from "./loading";

export default combineReducers({
  account: accountReducer,
  loading: loadingReducer,
});
