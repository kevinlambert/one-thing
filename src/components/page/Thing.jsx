import React, { useEffect } from "react";
import DefaultLayout from "../layouts/Default";
import FullLayout from "../layouts/Full";
import ThingPeriod from "../templates/ThingPeriod";
import ThingPeriodEdit from "../templates/ThingPeriodEdit";
import { useParams } from "react-router-dom";
import { getThing, saveThing } from "../../api/thing";
import { ThingPeriod as ThingPeriodModel } from "../../models";
import { dateTitle, thingPeriodTitle, AWSDate } from "../../util/format";
import { periodIntervalType } from "../../api/periodInterval";

// type Props = {
//   isEdit?: boolean;
// };

const getData = async (periodInterval, periodIncrement) => {
  const data = await getThing({
    focusPeriodID: null,
    periodInterval,
    periodIncrement,
  });

  return data[0];
};

const saveData = ({
  content,
  periodInterval,
  periodIncrement,
  startDate,
  endDate,
  accountID,
}) => {
  saveThing({
    // focusPeriodID,
    text: content,
    periodInterval,
    periodIncrement,
    startDate: AWSDate(startDate),
    endDate: AWSDate(endDate),
    // sphereID,
    accountID,
  });
};

export default ({ isEdit = false }) => {
  let { periodInterval, periodIncrement } = useParams();
  periodIncrement = parseInt(periodIncrement);

  // const [data, setData] = useState({
  //   startDate: new Date().toISOString(),
  //   endDate: new Date().toISOString(),
  //   text: "",
  // });

  const data = {};

  useEffect(() => {
    const fetchPost = async () => {
      const data2 = await getData(periodInterval, periodIncrement);
      console.log(data2);
      // setData(data2);
    };
    fetchPost();
  }, []);

  const title = thingPeriodTitle(periodInterval, periodIncrement);
  const date = dateTitle(data.startDate || "", data.endDate || "");

  const onSaveHandler = (content) => {
    saveData({
      content,
      periodInterval,
      periodIncrement,
      ...data,
      // accountID: storeState.account.id,
    });
  };

  return isEdit ? (
    <FullLayout>
      <ThingPeriodEdit
        title={title}
        date={date}
        thingContent={data.text}
        onSave={onSaveHandler}
      ></ThingPeriodEdit>
    </FullLayout>
  ) : (
    <ThingPeriod
      title={title}
      date={date}
      thingContent={data.text}
    ></ThingPeriod>
  );
};
