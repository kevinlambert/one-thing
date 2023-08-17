import store from "../store/store";
import { navigateTo } from "../store/navigate";
import { routePaths } from "../AppRoutes";

export const runOnboarding = () => {
  const state = store.getState();

  if (state.account.firstName === "" || !state.account.firstName) {
    store.dispatch(navigateTo(routePaths.ONBOARDING.WELCOME));
  }
};
