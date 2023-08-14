import { DataStore } from "@aws-amplify/datastore";

import { createAccount } from "../store/account";
import { createSphere, getSpheresByAccountID } from "../store/sphere";

import { setCurrentSphere } from "../store/current";
import { showLoading, hideLoading } from "../store/loading";
import logger from "../logger";
import store from "../store/store";
import { Hub } from "aws-amplify";
import { Auth } from "aws-amplify";

export const AuthEventHook = () => {
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

const DataSync = () => {
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
      removeListener();
      store.dispatch(hideLoading());
    }
  });
  // Start the DataStore, this kicks-off the sync process.
  DataStore.start();
};

const SetupApp = async () => {
  await SetupAccount();
  await SetupSpheres();
  await SetCurrentSphere();
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
    // gets account spheres
    let state = await store.getState();
    const accountID = state.account.id;

    await store.dispatch(
      getSpheresByAccountID({
        accountID,
      })
    );

    // There are no spheres so create a default sphere
    if (!state.spheres.length) {
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
