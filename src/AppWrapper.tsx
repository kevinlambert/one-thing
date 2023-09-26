import React from "react";
import { Outlet } from "react-router-dom";
import PwaUpdate from "./util/PwaUpdate";
import CodeNavigate from "./util/CodeNavigate";

const AppWrapper = () => (
  <>
    <PwaUpdate></PwaUpdate>
    <CodeNavigate></CodeNavigate>
    <Outlet />
  </>
);

export default AppWrapper;
