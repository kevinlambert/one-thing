import { DataStore } from "@aws-amplify/datastore";
import { ThingPeriod } from "../models";
import { periodIntervalType } from "./periodInterval";

type getThingProps = {
  currentDate: string;
  periodInterval: periodIntervalType;
  periodIncrement: number;
  sphereID: string;
  accountID: string;
};

const getCurrentThingsBySphere = async ({
  currentDate,
  sphereID,
  accountID,
}: getThingProps) => {
  return await DataStore.query(ThingPeriod, (thing) =>
    thing.and((thing) => [
      thing.startDate.ge(currentDate),
      thing.endDate.le(currentDate),
      thing.sphereID.eq(sphereID),
      thing.accountID.eq(accountID),
    ])
  );
};

type saveProps = {
  text: string;
  periodInterval: periodIntervalType;
  periodIncrement: number;
  startDate: Date;
  endDate: Date;
  sphereID: string;
  accountID: string;
};

const saveThing = async ({
  text,
  periodInterval,
  periodIncrement = 0,
  startDate,
  endDate,
  sphereID,
  accountID,
}: saveProps) => {
  await DataStore.save(
    new ThingPeriod({
      text,
      periodInterval,
      periodIncrement,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      sphereID,
      accountID,
    })
  );
};

type updateProps = {
  id: string;
  newText: string;
  newStartDate?: Date;
  newEndDate?: Date;
};

const updateThing = async ({
  id,
  newText,
  newStartDate,
  newEndDate,
}: updateProps) => {
  const original = await DataStore.query(ThingPeriod, id);

  if (original) {
    const updatedThing = await DataStore.save(
      ThingPeriod.copyOf(original, (updated) => {
        updated.text = newText;
        newStartDate ? (updated.startDate = newStartDate.toISOString()) : null;
        newEndDate ? (updated.endDate = newEndDate.toISOString()) : null;
      })
    );
  }
};

export default {
  getCurrentThingsBySphere,
  saveThing,
  updateThing,
};
