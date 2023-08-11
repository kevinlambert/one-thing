import { DataStore } from "@aws-amplify/datastore";

import { createAccount } from "../store/account";
import { createSphere, getSpheresByAccountID } from "../store/sphere";
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
      SetupAccount();
      removeListener();
      store.dispatch(hideLoading());
    }
  });
  // Start the DataStore, this kicks-off the sync process.
  DataStore.start();
};

const SetupAccount = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    await store.dispatch(createAccount(user.username));

    SetupSpheres();
  } catch (e) {
    logger.error(e);
  }
};

const SetupSpheres = async () => {
  const DEFAULT_SPHERE_NAME = "Personal";

  try {
    // gets account spheres
    const state = await store.getState();

    await store.dispatch(
      getSpheresByAccountID({
        accountID: state.account.id,
      })
    );

    // There are no spheres so create a default sphere
    if (!store.getState().spheres.length) {
      await store.dispatch(
        createSphere({
          name: DEFAULT_SPHERE_NAME,
          accountID: store.getState().account.id,
        })
      );
    }
  } catch (e) {
    logger.error(e);
  }
};
