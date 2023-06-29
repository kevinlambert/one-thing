import * as React from "react";
import DefaultLayout from "../layouts/Default";
import ThingPeriod from "../templates/ThingPeriod";
import { useParams } from "react-router-dom";

const getData = (period?: string) => {
  const data = {
    title: period || "",
    date: new Date(),
    content: "this is my one thing",
  };

  return data;
};

const Child = () => {
  let { period } = useParams();

  const data = getData(period);
  return (
    <DefaultLayout>
      <ThingPeriod
        title={data.title}
        date={data.date}
        thingContent={data.content}
      ></ThingPeriod>
    </DefaultLayout>
  );
};

export default class Thing extends React.Component {
  render() {
    return <Child></Child>;
  }
}
