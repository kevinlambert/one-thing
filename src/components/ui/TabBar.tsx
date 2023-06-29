import * as React from "react";
import "./_tabbar.scss";
import { ReactComponent as IconCalenderMonth } from "@material-design-icons/svg/outlined/calendar_month.svg";
import { ReactComponent as IconWeek } from "@material-design-icons/svg/outlined/calendar_view_week.svg";
import { ReactComponent as IconToday } from "@material-design-icons/svg/outlined/today.svg";
import IconButton from "./IconButton";
import { NavLink } from "react-router-dom";

export default () => (
  <div className="tabbar">
    <NavLink to={"/thing/3months"}>
      <IconButton
        icon={<IconCalenderMonth></IconCalenderMonth>}
        label="3 Months"
      ></IconButton>
    </NavLink>
    <NavLink to={"/thing/week"}>
      <IconButton icon={<IconWeek></IconWeek>} label="This week"></IconButton>
    </NavLink>
    <NavLink to={"/thing/today"}>
      <IconButton icon={<IconToday></IconToday>} label="Today"></IconButton>
    </NavLink>
  </div>
);
