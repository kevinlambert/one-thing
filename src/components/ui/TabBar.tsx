import * as React from "react";
import "./_tabbar.scss";
import { ReactComponent as IconCalenderMonth } from "@material-design-icons/svg/outlined/calendar_month.svg";
import { ReactComponent as IconWeek } from "@material-design-icons/svg/outlined/calendar_view_week.svg";
import { ReactComponent as IconToday } from "@material-design-icons/svg/outlined/today.svg";
import IconButton from "./IconButton";

export default () => (
  <div className="tabbar">
    <IconButton
      icon={<IconCalenderMonth></IconCalenderMonth>}
      label="3 Months"
    ></IconButton>
    <IconButton icon={<IconWeek></IconWeek>} label="This week"></IconButton>
    <IconButton icon={<IconToday></IconToday>} label="Today"></IconButton>
  </div>
);
