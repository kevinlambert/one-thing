import { GetThings } from "./setup";
import store from "../data/store";
import logger from "../logger";

// Checks if a new day has occured while the app is open. Such as when the app is open overnight.
// the day has changed so the the app needs to update

const ONE_MINUTE = 60000;
const ONE_HOUR = ONE_MINUTE * 60;

export const newDayIntervalCheck = () => {
  return setInterval(() => {
    logger.debug("New day interval run");
    const outOfSync = store.getState().thing.find((item) => {
      const now = new Date();
      return new Date().getDate() > new Date(item.endDate).getDate();
    });
    if (outOfSync) {
      logger.info("New day. Things out of Sync - Syncing");
      GetThings();
    }
  }, ONE_HOUR);
};
