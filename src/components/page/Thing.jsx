import React from "react";
import FullLayout from "../layouts/Full";
import ThingPeriod from "../templates/ThingPeriod";
import ThingPeriodEdit from "../templates/ThingPeriodEdit";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Flex, useTheme } from "@aws-amplify/ui-react";
import {
  dateTitle,
  thingPeriodTitle,
  weekDateRange,
  monthDateRange,
} from "../../util/format";

import store from "../../store/store";
import {
  findThingByIntervalIncrementHelper,
  saveThing,
  updateThing,
} from "../../store/thing";

import Moment from "../templates/moment/Moment";
import IGotThis from "../templates/IGotThis/IGotTothis";

const getStartAndEndDateBasedOnToday = ({
  periodInterval,
  periodIncrement,
}) => {
  if (periodInterval === "week" && periodIncrement === 0) {
    const { startOfWeekDate, endOfWeekDate } = weekDateRange(new Date());
    return {
      startDate: startOfWeekDate,
      endDate: endOfWeekDate,
    };
  } else if (periodInterval === "month") {
    const { startOfMonthRange, endOfMonthRange } = monthDateRange(
      new Date(),
      periodIncrement
    );
    return {
      startDate: startOfMonthRange,
      endDate: endOfMonthRange,
    };
  } else {
    return {
      startDate: new Date(),
      endDate: new Date(),
    };
  }
};

const Thing = ({ isEdit = false }) => {
  let { periodInterval, periodIncrement } = useParams();
  const navigate = useNavigate();

  periodIncrement = parseInt(periodIncrement);

  const thingPeriod = findThingByIntervalIncrementHelper({
    state: store.getState(),
    periodInterval,
    periodIncrement,
  });

  const title = thingPeriodTitle(periodInterval, periodIncrement);

  const startEndDates = getStartAndEndDateBasedOnToday({
    periodInterval,
    periodIncrement,
  });

  const startDate =
    thingPeriod.startDate || startEndDates.startDate.toISOString();
  const endDate = thingPeriod.endDate || startEndDates.endDate.toISOString();

  const date = dateTitle({
    periodInterval,
    periodIncrement,
    startDate,
    endDate,
  });

  const onSaveHandler = async (text) => {
    if (thingPeriod.id) {
      await store.dispatch(
        updateThing({
          id: thingPeriod.id,
          newText: text,
          isDone: false, // If you update the text then assume the user has not fufilled it
        })
      );
    } else {
      await store.dispatch(
        saveThing({
          text,
          periodInterval,
          periodIncrement,
          startDate,
          endDate,
          sphereID: store.getState().current.currentSphere.id,
          accountID: store.getState().account.id,
        })
      );
    }

    navigate(-1);
  };

  const thisThing = useSelector((state) =>
    state.thing.find((item) => item.id === thingPeriod.id)
  );

  const onIDidThisToggle = async () => {
    await store.dispatch(
      updateThing({
        id: thingPeriod.id,
        isDone: !thingPeriod.isDone,
      })
    );
  };

  const { tokens } = useTheme();

  return isEdit ? (
    <FullLayout>
      <ThingPeriodEdit
        title={title}
        date={date}
        thingContent={thingPeriod.text}
        onSave={onSaveHandler}
      ></ThingPeriodEdit>
    </FullLayout>
  ) : !thingPeriod.text ? (
    <Moment />
  ) : (
    <>
      <ThingPeriod
        title={title}
        date={date}
        thingContent={thingPeriod.text}
      ></ThingPeriod>
      <Flex justifyContent={"flex-end"} marginTop={tokens.space.medium}>
        <IGotThis
          isPressed={thisThing.isDone}
          onPressedHandler={onIDidThisToggle}
        />
      </Flex>
    </>
  );
};

export default Thing;
