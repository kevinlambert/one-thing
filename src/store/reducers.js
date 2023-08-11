import { combineReducers } from "redux";
import accountReducer from "./account";
import loadingReducer from "./loading";
import sphereReducer from "./sphere";

export default combineReducers({
  account: accountReducer,
  loading: loadingReducer,
  spheres: sphereReducer,
});
