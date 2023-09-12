import { DataStore } from "@aws-amplify/datastore";

import { createAccount } from "../data/store/account";
import { createSphere, getSpheresByAccountID } from "../data/store/sphere";
import { setCurrentSphere } from "../data/store/current";
import { showLoading, hideLoading } from "../data/store/loading";
import { getCurrentThingsBySphere } from "../data/store/thing";
import { getPreviousThing } from "../data/store/previousThing";
import { runOnboarding } from "../util/onboarding";

import logger from "../logger";
import store from "../data/store";
import { Hub } from "aws-amplify";
import { Auth } from "aws-amplify";

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
};

const SetupAccount = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();

    await store.dispatch(createAccount(user.username));
  } catch (e) {
    logger.error(e);
  }
};

const SetupSpheres = async () => {
  const DEFAULT_SPHERE_NAME = "Personal";

  try {
    const accountID = store.getState().account.id;

    // Get account spheres
    await store.dispatch(
      getSpheresByAccountID({
        accountID,
      })
    );

    // There are no spheres so create a default sphere
    if (!store.getState().spheres.length) {
      logger.debug("No sphere exists. Creating one.");

      await store.dispatch(
        createSphere({
          name: DEFAULT_SPHERE_NAME,
          isDefault: true,
          accountID,
        })
      );
    }
  } catch (e) {
    logger.error(e);
  }
};

const SetCurrentSphere = async () => {
  const state = await store.getState();
  const defaultSphere = state.spheres.find((item) => item.isDefault);
  const sphere = defaultSphere || state.spheres[0];
  await store.dispatch(setCurrentSphere(sphere));
};

const GetThings = async () => {
  const state = await store.getState();

  await store.dispatch(
    getCurrentThingsBySphere({
      currentDate: new Date(),
      sphereID: state.current.currentSphere.id,
      accountID: state.account.id,
    })
  );

  // get previous things
  const things = await store.getState().thing;

  ["month", "week", "day"].forEach(async (period) => {
    if (!things.find((item) => item.periodInterval === period)) {
      await store.dispatch(
        getPreviousThing({
          periodInterval: period,
          sphereID: state.current.currentSphere.id,
        })
      );
    }
  });
};
