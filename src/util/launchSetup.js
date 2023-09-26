import { DataStore } from "@aws-amplify/datastore";
import { showLoading, hideLoading } from "../data/store/loading";
import { runOnboarding } from "../util/onboarding";
import {
  GetThings,
  SetCurrentSphere,
  SetupAccount,
  SetupSpheres,
} from "./setup";
import { newDayIntervalCheck } from "./appRefresh";

import logger from "../logger";
import store from "../data/store";
import { Hub } from "aws-amplify";
import { Auth } from "aws-amplify";

let appRefreshInterval = null;

export const authEventHook = () => {
  Hub.listen("auth", (data) => {
    logger.debug(data.payload.event);

    switch (data.payload.event) {
      case "signIn":
        DataSync();
        logger.debug("user signed in");
        logger.debug(data);
        break;
    }
  });
};

const isUserLoggedIn = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return true;
  } catch {
    return false;
  }
};

export const DataSync = async () => {
  if (await isUserLoggedIn()) {
    // set loading
    store.dispatch(showLoading());

    const removeListener = Hub.listen("datastore", async (capsule) => {
      const {
        payload: { event, data },
      } = capsule;

      logger.debug("DataStore event", event, data);

      if (event === "ready") {
        // hide loading
        await SetupApp();
        runOnboarding();
        removeListener();
        store.dispatch(hideLoading());
      }
    });
    // Start the DataStore, this kicks-off the sync process.
    DataStore.start();
  }
};

const SetupApp = async () => {
  await SetupAccount();
  await SetupSpheres();
  await SetCurrentSphere();
  await GetThings();

  if (appRefreshInterval) clearInterval(appRefreshInterval);
  appRefreshInterval = newDayIntervalCheck();
};
