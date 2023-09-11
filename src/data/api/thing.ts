import { DataStore } from "@aws-amplify/datastore";
import { ThingPeriod } from "../../models";
import { periodIntervalType } from "./periodInterval";
import { AWSDate } from "../../util/format";
import { Await } from "react-router-dom";

type getThingProps = {
  currentDate: Date;
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
      thing.startDate.le(AWSDate(currentDate)),
      thing.endDate.ge(AWSDate(currentDate)),
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
  isDone?: boolean;
  isRelatedTo?: string;
  sphereID: string;
  accountID: string;
};

const saveThing = async ({
  text,
  periodInterval,
  periodIncrement = 0,
  startDate,
  endDate,
  isDone = false,
  isRelatedTo = JSON.stringify([]),
  sphereID,
  accountID,
}: saveProps) => {
  return await DataStore.save(
    new ThingPeriod({
      text,
      periodInterval,
      periodIncrement,
      startDate: AWSDate(startDate),
      endDate: AWSDate(endDate),
      isDone,
      isRelatedTo,
      sphereID,
      accountID,
    })
  );
};

type updateProps = {
  id: string;
  newText?: string;
  newStartDate?: Date;
  newEndDate?: Date;
  isDone?: boolean;
  isRelatedTo?: string;
};

const updateThing = async ({
  id,
  newText,
  newStartDate,
  newEndDate,
  isDone,
  isRelatedTo,
}: updateProps) => {
  const original = await DataStore.query(ThingPeriod, id);
  if (original) {
    return await DataStore.save(
      ThingPeriod.copyOf(original, (updated) => {
        if (newText !== undefined && newText !== null) updated.text = newText;
        if (newStartDate) updated.startDate = AWSDate(newStartDate);
        if (newEndDate) updated.endDate = AWSDate(newEndDate);
        if (isDone) updated.isDone = isDone;
        if (isRelatedTo) updated.isRelatedTo = isRelatedTo;
      })
    );
  }
};

export default {
  getCurrentThingsBySphere,
  saveThing,
  updateThing,
};
