import React from "react";
import { useNavigate } from "react-router-dom";
import { routePathHelper } from "../../AppRoutes";
import DefaultLayout from "../layouts/Default";

export default () => {
  const navigate = useNavigate();

  navigate(routePathHelper.focusPeriodThing());

  // this won't get rendered due to above redirect
  return (
    <DefaultLayout>
      <div>Home</div>
    </DefaultLayout>
  );
};
