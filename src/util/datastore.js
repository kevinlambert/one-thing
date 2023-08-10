import logger from "../logger";
import { Hub } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";

export const DatastoreEventHook = () => {
  Hub.listen("api", (data) => {
    // logger.debug(data.payload.event);
    // logger.debug(data);
    // const { event, data } = hubData.payload;
    // if (event === "networkStatus") {
    //   console.log(`User has a network connection: ${data.active}`);
    // }
    // switch (data.payload.event) {
    //   case "signIn":
    //     AccountSetup();
    //     logger.debug("user signed in");
    //     logger.debug(data);
    //     break;
    // }
  });
};
