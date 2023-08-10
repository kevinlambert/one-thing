import { useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";

import { createAccount } from "../store/account";
import logger from "../logger";
import store from "../store/store";
import { Hub } from "aws-amplify";
import { Auth } from "aws-amplify";

export const AuthEventHook = () => {
  Hub.listen("auth", (data) => {
    logger.debug(data.payload.event);

    switch (data.payload.event) {
      case "signIn":
        AccountSetup();
        logger.debug("user signed in");
        logger.debug(data);
        break;
    }
  });
};

const DataSync = () => {
  // set loading

  useEffect(() => {
    const removeListener = Hub.listen("datastore", async (capsule) => {
      const {
        payload: { event, data },
      } = capsule;

      console.log("DataStore event", event, data);

      if (event === "ready") {
        // hide loading
      }
    });
    // Start the DataStore, this kicks-off the sync process.
    DataStore.start();

    return () => {
      removeListener();
    };
  }, []);
};

const AccountSetup = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    store.dispatch(createAccount(user.username));
  } catch (e) {
    logger.error(e);
  }
};
