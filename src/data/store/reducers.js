import { combineReducers } from "redux";
import userReducer from "./user";
import accountReducer from "./account";
import loadingReducer from "./loading";
import navigateReducer from "./navigate";
import sphereReducer from "./sphere";
import currentReducer from "./current";
import thingReducer from "./thing";
import previousThingReducer from "./previousThing";

export default combineReducers({
  user: userReducer,
  account: accountReducer,
  loading: loadingReducer,
  navigate: navigateReducer,
  spheres: sphereReducer,
  current: currentReducer,
  thing: thingReducer,
  previousThing: previousThingReducer,
});
