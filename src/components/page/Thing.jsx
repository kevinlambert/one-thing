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
        isDone: thingPeriod.isDone === 1 ? 0 : 1,
      })
    );
  };

  if (!thingPeriod.text) {
    const { previousThing } = store.getState();

    if (
      previousThing[periodInterval] &&
      previousThing[periodInterval][periodIncrement].isDone === -1
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
