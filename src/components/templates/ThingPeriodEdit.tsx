import * as React from "react";
import ThingHeader from "../ui/ThingHeader";
import ThingEdit from "../ui/ThingEdit";
import IconButton from "../ui/IconButton";
import { ReactComponent as IconMore } from "@material-design-icons/svg/outlined/close.svg";
import "./_thing-period.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  date: Date;
  thingContent: string;
  isEdit?: boolean;
};

export default ({ title, date, thingContent }: Props) => {
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="thing-period-header">
        <ThingHeader
          Title={title}
          DisplayDate={date.toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        ></ThingHeader>
      </div>
      <div className="margin-bottom-16"></div>
      <ThingEdit
        content={thingContent}
        onSave={() => {}}
        onCancel={cancelHandler}
      ></ThingEdit>
    </>
  );
};
