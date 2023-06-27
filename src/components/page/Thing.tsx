import * as React from "react";
import DefaultLayout from "../layouts/Default";
import ThingPeriod from "../templates/ThingPeriod";

const data = {
  title: "Today",
  date: new Date(),
  content: "this is my one thing",
};

export default () => (
  <DefaultLayout>
    <ThingPeriod
      title={data.title}
      date={data.date}
      thingContent={data.content}
    ></ThingPeriod>
  </DefaultLayout>
);
