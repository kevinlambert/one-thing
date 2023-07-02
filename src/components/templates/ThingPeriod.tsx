import * as React from "react";
import ThingHeader from "../ui/ThingHeader";
import ThingDisplay from "../ui/ThingDisplay";
import ThingEdit from "../ui/ThingEdit";
import IconButton from "../ui/IconButton";
import { ReactComponent as IconEditCalender } from "@material-design-icons/svg/outlined/edit_calendar.svg";
import "./_thing-period.scss";
import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  date: Date;
  thingContent: string;
  isEdit?: boolean;
};

export default ({ title, date, thingContent, isEdit }: Props) => (
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
      <NavLink to={"edit"}>
        <IconButton
          icon={<IconEditCalender></IconEditCalender>}
          label="Edit"
          isUnderline={true}
        ></IconButton>
      </NavLink>
    </div>
    <div className="margin-bottom-16"></div>
    {isEdit ? (
      <ThingEdit
        content={thingContent}
        onSave={() => {}}
        onCancel={() => {}}
      ></ThingEdit>
    ) : (
      <ThingDisplay content={thingContent}></ThingDisplay>
    )}
  </>
);
