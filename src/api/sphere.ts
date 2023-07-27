import { DataStore } from "@aws-amplify/datastore";
import { Sphere, ThingPeriod } from "../models";

type createProps = {
  name?: string;
  description?: string;
  SphereThingPeriods?: [];
  accountID: string;
};

export const createSphere = async ({
  name = "Default",
  description = "",
  SphereThingPeriods = [],
  accountID,
}: createProps) => {
  await DataStore.save(
    new Sphere({
      name,
      description,
      SphereThingPeriods,
      accountID,
    })
  );
};

type updateProps = {
  originalSphere: Sphere;
  focusThingPeriod: ThingPeriod;
};

export const updateSphere = async ({
  originalSphere,
  focusThingPeriod,
}: updateProps) => {
  await DataStore.save(
    Sphere.copyOf(originalSphere, (updated) => {
      updated.SphereThingPeriods = [focusThingPeriod];
    })
  );
};
