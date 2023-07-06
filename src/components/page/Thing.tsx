import * as React from "react";
import DefaultLayout from "../layouts/Default";
import FullLayout from "../layouts/Full";
import ThingPeriod from "../templates/ThingPeriod";
import ThingPeriodEdit from "../templates/ThingPeriodEdit";
import { useParams } from "react-router-dom";

type Props = {
  isEdit?: boolean;
};

const getData = (period?: string) => {
  const data = {
    title: period || "",
    date: new Date(),
    content: "this is my one thing",
  };

  return data;
};

const Child = ({ isEdit }: Props) => {
  let { period } = useParams();

  const data = getData(period);
  return isEdit ? (
    <FullLayout>
      <ThingPeriodEdit
        title={data.title}
        date={data.date}
        thingContent={data.content}
      ></ThingPeriodEdit>
    </FullLayout>
  ) : (
    <ThingPeriod
      title={data.title}
      date={data.date}
      thingContent={data.content}
    ></ThingPeriod>
  );
};

export default ({ isEdit = false }: Props) => <Child isEdit={isEdit}></Child>;
