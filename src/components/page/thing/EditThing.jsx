import React from "react";
import FullLayout from "../../layouts/Full";
import ThingPeriodEdit from "../../templates/ThingPeriodEdit";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStartAndEndDateBasedOnToday } from "../helpers/DateHelper";
import { Flex, useTheme } from "@aws-amplify/ui-react";
import { dateTitle, thingPeriodTitle } from "../../../util/format";
import { routePathHelper } from "../../../AppRoutes";
import store from "../../../data/store";
import { saveThing, updateThing } from "../../../data/store/thing";

const EditThing = () => {
  const navigate = useNavigate();
  let { periodInterval, periodIncrement } = useParams();
  periodIncrement = parseInt(periodIncrement);

  const things = useSelector((state) => state.thing);

  const thingPeriod =
    things.find(
      (item) =>
        item.periodInterval === periodInterval &&
        item.periodIncrement === periodIncrement
    ) || {};

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

  const thingDisplayPath = () => {
    return routePathHelper.thing({ periodInterval, periodIncrement });
  };

  const onSaveHandler = async ({ content, relateToSelection }) => {
    if (thingPeriod.id) {
      await store.dispatch(
        updateThing({
          id: thingPeriod.id,
          newText: content,
          isDone: 0, // If you update the text then assume the user has not fufilled it
          isRelatedTo: JSON.stringify(relateToSelection),
        })
      );
    } else {
      await store.dispatch(
        saveThing({
          text: content,
          periodInterval,
          periodIncrement,
          startDate,
          endDate,
          isRelatedTo: JSON.stringify(relateToSelection),
          sphereID: store.getState().current.currentSphere.id,
          accountID: store.getState().account.id,
        })
      );
    }

    navigate(thingDisplayPath());
  };

  const onCancelHandler = () => {
    navigate(thingDisplayPath());
  };

  return (
    <FullLayout>
      <ThingPeriodEdit
        title={title}
        date={date}
        thingContent={thingPeriod.text}
        relatedTo={thingPeriod.isRelatedTo}
        onSave={onSaveHandler}
        onCancel={onCancelHandler}
      ></ThingPeriodEdit>
    </FullLayout>
  );
};

export default EditThing;
