import { createAccount } from "../data/store/account";
import { setUser } from "../data/store/user";
import { createSphere, getSpheresByAccountID } from "../data/store/sphere";
import { setCurrentSphere } from "../data/store/current";
import { getCurrentThingsBySphere } from "../data/store/thing";
import { getPreviousThing } from "../data/store/previousThing";

import logger from "../logger";
import store from "../data/store";
import { Auth } from "aws-amplify";

export const SetupAccount = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    await store.dispatch(setUser(user));
    await store.dispatch(createAccount(user.username));
  } catch (e) {
    logger.error(e);
  }
};

export const SetupSpheres = async () => {
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

export const SetCurrentSphere = async () => {
  const state = await store.getState();
  const defaultSphere = state.spheres.find((item) => item.isDefault);
  const sphere = defaultSphere || state.spheres[0];
  await store.dispatch(setCurrentSphere(sphere));
};

export const GetThings = async () => {
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
