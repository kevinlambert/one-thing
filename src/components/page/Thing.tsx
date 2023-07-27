import React, { useEffect } from "react";
import DefaultLayout from "../layouts/Default";
import FullLayout from "../layouts/Full";
import ThingPeriod from "../templates/ThingPeriod";
import ThingPeriodEdit from "../templates/ThingPeriodEdit";
import { useParams } from "react-router-dom";
import { getThing } from "../../api/thing";
import { ThingPeriod as ThingPeriodModel } from "../../models";

type Props = {
  isEdit?: boolean;
};

const getData = async (period?: string) => {
  return await getThing({
    focusPeriodID: null,
    periodInterval: "month",
    periodIncrement: 3,
  });

  // const data = {
  //   title: period || "",
  //   date: new Date(),
  //   content: "this is my one thing",
  // };
};

const Child = ({ isEdit }: Props) => {
  let { period } = useParams();

  const data2 = getData(period);
  console.log(data2);

  const data = {
    title: period || "",
    date: new Date(),
    content: "this is my one thing",
  };

  return isEdit ? (
    <FullLayout>
      <ThingPeriodEdit
        title={data.title}
        date={data.date}
        thingContent={"test"}
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
