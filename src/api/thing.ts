import { DataStore } from "@aws-amplify/datastore";
import { ThingPeriod } from "../models";
import { periodIntervalType } from "./periodInterval";

type getThingProps = {
  focusPeriodID: string | null;
  periodInterval: periodIntervalType;
  periodIncrement: number;
};

export const getThing = async ({
  focusPeriodID,
  periodInterval,
  periodIncrement,
}: getThingProps) => {
  return await DataStore.query(ThingPeriod, (thing) =>
    thing.and((thing) => [
      thing.parentID.eq(focusPeriodID),
      thing.periodInterval.eq(periodInterval),
      thing.periodIncrement.eq(periodIncrement),
    ])
  );
};

type saveProps = {
  focusPeriodID: string;
  text: string;
  periodInterval: periodIntervalType;
  periodIncrement: number;
  startDate: Date;
  endDate: Date;
  sphereID: string;
  accountID: string;
};

export const saveThing = async ({
  focusPeriodID,
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
      parentID: focusPeriodID,
      text,
      periodInterval,
      periodIncrement,
      startDate: startDate.toString(),
      endDate: endDate.toString(),
      createdDateTime: new Date().toISOString(),
      updatedDateTime: new Date().toISOString(),
      sphereID: "0",
      accountID: "0",
    })
  );
};

type updateProps = {
  id: string;
  newText: string;
};

export const updateThing = async ({ id, newText }: updateProps) => {
  const original = await DataStore.query(ThingPeriod, id);

  if (original) {
    const updatedThing = await DataStore.save(
      ThingPeriod.copyOf(original, (updated) => {
        updated.text = newText;
      })
    );
  }
};
