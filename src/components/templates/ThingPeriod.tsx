import * as React from "react";
import ThingHeader from "../ui/ThingHeader";
import ThingDisplay from "../ui/ThingDisplay";
import IconButton from "../ui/IconButton";
import { ReactComponent as IconEditCalender } from "@material-design-icons/svg/outlined/edit_calendar.svg";
import "./_thing-period.scss";
import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  date: string;
  thingContent: string;
  isEdit?: boolean;
};

const Edit = () => (
  <NavLink to={"edit"}>
    <IconButton
      icon={<IconEditCalender></IconEditCalender>}
      label="Edit"
      isUnderline={true}
    ></IconButton>
  </NavLink>
);

export default ({ title, date, thingContent = "" }: Props) => (
  <>
    <div className="thing-period-header">
      <ThingHeader Title={title} DisplayDate={date}></ThingHeader>
      <Edit />
    </div>
    <div className="margin-bottom-16"></div>
    <ThingDisplay content={thingContent}></ThingDisplay>
  </>
);
