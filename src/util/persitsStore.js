import logger from "../logger";
import { DataSync } from "./launchSetup";

export const addPersitStoreHook = () => {
  window.addEventListener("load", (event) => {
    logger.info("page is fully loaded");
    //TODO: refine and fix this
    DataSync();
  });
};
