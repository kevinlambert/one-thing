import { DataStore } from "@aws-amplify/datastore";

import { createAccount } from "../store/account";
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
      store.dispatch(hideLoading());
      AccountSetup();
      removeListener();
    }
  });
  // Start the DataStore, this kicks-off the sync process.
  DataStore.start();
};

const AccountSetup = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    store.dispatch(createAccount(user.username));
  } catch (e) {
    logger.error(e);
  }
};
