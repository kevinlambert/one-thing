import * as React from "react";
import ThingHeader from "../ui/ThingHeader";
import AppHeader from "../ui/AppHeader";
import TabBar from "../ui/TabBar";
import ThingDisplay from "../ui/ThingDisplay";

type Props = {
  title: string;
  date: Date;
  thingContent: string;
};

export default ({ title, date, thingContent }: Props) => (
  <>
    <ThingHeader
      Title={title}
      DisplayDate={date.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    ></ThingHeader>
    <div className="margin-bottom-16"></div>
    <ThingDisplay content={thingContent}></ThingDisplay>
  </>
);
