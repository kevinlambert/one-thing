import React from "react";
import ThingPeriod from "../templates/ThingPeriod";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Flex, useTheme } from "@aws-amplify/ui-react";
import { formatDateTitle } from "./thingHelpers";
import { thingPeriodTitle } from "../../util/format";

import store from "../../data/store";
import { updateThing } from "../../data/store/thing";

import Moment from "../templates/moment/Moment";
import IGotThis from "../templates/IGotThis/IGotTothis";

const Thing = ({ isEdit = false }) => {
  const { tokens } = useTheme();
  let { periodInterval, periodIncrement } = useParams();
  periodIncrement = parseInt(periodIncrement);

  const thingPeriod = useSelector(
    (state) =>
      state.thing.find(
        (item) =>
          item.periodInterval === periodInterval &&
          item.periodIncrement === periodIncrement
      ) || {}
  );

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
        isDone: !thingPeriod.isDone,
      })
    );
  };

  return !thingPeriod.text ? (
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
          isPressed={thingPeriod.isDone}
          onPressedHandler={onIDidThisToggle}
        />
      </Flex>
    </>
  );
};

export default Thing;
