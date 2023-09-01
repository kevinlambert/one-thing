import * as React from "react";
import ThingHeader from "../ui/ThingHeader";
import ThingDisplay from "../ui/ThingDisplay";
import IconButton from "../ui/IconButton";
import Moment from "./moment/Moment";
import { ReactComponent as IconEditCalender } from "@material-design-icons/svg/outlined/edit_calendar.svg";
import "./_thing-period.scss";
import { NavLink } from "react-router-dom";
import { Divider } from "@aws-amplify/ui-react";

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

const thing = ({ title, date, thingContent = "", isEdit }: Props) => (
  <>
    <div className="thing-period-header">
      <ThingHeader Title={title} DisplayDate={date}></ThingHeader>
      <Edit />
    </div>
    <div className="margin-bottom-16"></div>
    <ThingDisplay content={thingContent}></ThingDisplay>
  </>
);

export default ({ title, date, thingContent, isEdit }: Props) => {
  const noContent = !thingContent;

  return noContent ? <Moment /> : thing({ title, date, thingContent, isEdit });
};
