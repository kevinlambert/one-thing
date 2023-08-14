import { DataStore } from "@aws-amplify/datastore";
import { Sphere, ThingPeriod } from "../models";
import logger from "../logger";

type createProps = {
  name?: string;
  description?: string;
  SphereThingPeriods?: [];
  isDefault: boolean;
  accountID: any;
};

const getSpheresByAccountID = async (accountID: string) => {
  const result = await DataStore.query(Sphere, (item) => {
    return item.accountID.eq(accountID);
  });

  return result;
};

const createSphere = async ({
  name = "",
  description = "",
  SphereThingPeriods = [],
  isDefault = false,
  accountID,
}: createProps) => {
  try {
    const data = await DataStore.save(
      new Sphere({
        name,
        description,
        SphereThingPeriods,
        isDefault,
        accountID,
      })
    );
    return data;
  } catch (e) {
    logger.error(e);
  }
};

type updateProps = {
  originalSphere: Sphere;
  focusThingPeriod: ThingPeriod;
};

const updateSphere = async ({
  originalSphere,
  focusThingPeriod,
}: updateProps) => {
  return await DataStore.save(
    Sphere.copyOf(originalSphere, (updated) => {
      updated.SphereThingPeriods = [focusThingPeriod];
    })
  );
};

export default {
  getSpheresByAccountID,
  createSphere,
  updateSphere,
};
