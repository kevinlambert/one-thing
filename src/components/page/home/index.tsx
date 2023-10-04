import React from "react";
import DefaultLayout from "../../layouts/Default";
import { useSelector } from "react-redux";
import ThingCard from "./ThingCard";
import { Flex, useTheme } from "@aws-amplify/ui-react";
import { routePathHelper } from "../../../AppRoutes";

export default () => {
  const { tokens } = useTheme();
  const things = useSelector((state: any) => state.thing);

  const findThing = ({ periodInterval, periodIncrement }: any) =>
    things.find(
      (item: any) =>
        item.periodInterval === periodInterval &&
        item.periodIncrement === periodIncrement
    ) || {};

  console.log(things);

  const threeMonthThing = findThing({
    periodInterval: "month",
    periodIncrement: 3,
  });
  const thisWeekThing = findThing({
    periodInterval: "week",
    periodIncrement: 0,
  });
  const todayThing = findThing({ periodInterval: "day", periodIncrement: 0 });

  // this won't get rendered due to above redirect
  return (
    <DefaultLayout>
      <Flex direction={"column"} gap={tokens.space.xxxs}>
        {threeMonthThing ? (
          <ThingCard
            periodTitle="3 month"
            thingContent={threeMonthThing.text}
            isLinked={
              thisWeekThing.isRelatedTo &&
              thisWeekThing.isRelatedTo.includes("MONTH3")
            }
            borderTopRound={true}
            toDoPath={routePathHelper.thing({
              periodInterval: "month",
              periodIncrement: 3,
            })}
          />
        ) : null}
        {thisWeekThing ? (
          <ThingCard
            periodTitle="This week"
            thingContent={thisWeekThing.text}
            showLink
            isLinked={
              (thisWeekThing.isRelatedTo &&
                thisWeekThing.isRelatedTo.includes("MONTH3")) ||
              (todayThing.isRelatedTo &&
                todayThing.isRelatedTo.includes("WEEK0"))
            }
            isLinkedIcon={
              thisWeekThing.isRelatedTo &&
              thisWeekThing.isRelatedTo.includes("MONTH3")
            }
            toDoPath={routePathHelper.thing({
              periodInterval: "week",
              periodIncrement: 0,
            })}
          />
        ) : null}

        <ThingCard
          periodTitle="Today"
          thingContent={todayThing.text}
          showLink
          isLinked={
            todayThing.isRelatedTo && todayThing.isRelatedTo.includes("WEEK0")
          }
          isLinkedIcon={
            todayThing.isRelatedTo && todayThing.isRelatedTo.includes("WEEK0")
          }
          toDoPath={routePathHelper.thing({
            periodInterval: "day",
            periodIncrement: 0,
          })}
          borderBottomRound
        />
      </Flex>
    </DefaultLayout>
  );
};
