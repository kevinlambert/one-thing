import React from "react";
import ThingPeriod from "../templates/ThingPeriod";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Flex, useTheme } from "@aws-amplify/ui-react";
import { formatDateTitle } from "./thingHelpers";
import { thingPeriodTitle, AWSDate } from "../../util/format";

import store from "../../data/store";
import { updateThing } from "../../data/store/thing";

import Moment from "../templates/moment/Moment";
import Yesterday from "../templates/yesterday/Yesterday";
import IGotThis from "../templates/IGotThis/IGotTothis";

const Thing = () => {
  const { tokens } = useTheme();
  let { periodInterval, periodIncrement } = useParams();
  periodIncrement = parseInt(periodIncrement);

  // things selector. if this is removesd then the I got this button does not update
  const things = useSelector((state) => state.thing);
  const previousThing = useSelector((state) => state.previousThing);
  const previousThingInterval = previousThing[periodInterval];
  const previousThingIntervalIncrement = previousThingInterval
    ? previousThingInterval[periodIncrement]
    : null;

  // possibly use https://redux.js.org/usage/deriving-data-selectors
  const thingPeriod =
    things.find(
      (item) =>
        item.periodInterval === periodInterval &&
        item.periodIncrement === periodIncrement
    ) || {};

  const title = thingPeriodTitle(periodInterval, periodIncrement);

  const date = formatDateTitle({
    thingPeriod,
    periodInterval,
    periodIncrement,
  });

  const onIDidThisToggle = async () => {
    await store.dispatch(
      updateThing({
        id: thingPeriod.id,
        isDone: thingPeriod.isDone === 1 ? -1 : 1, // set to -1 so that the system knows the next day whether the user has said they definately haven't done this. i.e. 0 would mean they definately haven't got to this as oposed to just a toggle
      })
    );
  };

  // const previousThingNotBeenUpdatedToday = () =>
  //   AWSDate(previousThingIntervalIncrement.updatedAt) < AWSDate(new Date());

  if (!thingPeriod.text) {
    // TODO: add check for not isDone and hasn't been updated today. The user could select and unselect on the previous day.
    if (
      previousThingIntervalIncrement &&
      previousThingIntervalIncrement.isDone === -1
    ) {
      return <Yesterday />;
    } else {
      return <Moment />;
    }
  } else {
    return (
      <>
        <ThingPeriod
          title={title}
          date={date}
          thingContent={thingPeriod.text}
        ></ThingPeriod>
        <Flex justifyContent={"flex-end"} marginTop={tokens.space.medium}>
          <IGotThis
            isPressed={thingPeriod.isDone === 1}
            onPressedHandler={onIDidThisToggle}
          />
        </Flex>
      </>
    );
  }
};

export default Thing;
