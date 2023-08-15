import { combineReducers } from "redux";
import accountReducer from "./account";
import loadingReducer from "./loading";
import sphereReducer from "./sphere";
import currentReducer from "./current";
import thingReducer from "./thing";

export default combineReducers({
  account: accountReducer,
  loading: loadingReducer,
  spheres: sphereReducer,
  current: currentReducer,
  thing: thingReducer,
});
