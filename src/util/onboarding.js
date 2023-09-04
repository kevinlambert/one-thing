import store from "../data/store";
import { navigateTo } from "../data/store/navigate";
import { routePaths, routePathHelper } from "../AppRoutes";

const latestTermsAndConditionsDate = new Date(); // TODO: get from somewhere

export const runOnboarding = () => {
  const state = store.getState();

  if (state.account.firstName === "" || !state.account.firstName) {
    store.dispatch(navigateTo(routePaths.ONBOARDING.WELCOME));
  } else if (!state.account.isTourDone) {
    store.dispatch(navigateTo(routePathHelper.tour({ step: 0 })));
  } else if (
    state.account.termsAndConditionsAccepted >= latestTermsAndConditionsDate
  ) {
    // TODO: accept new terms page
  }
};
