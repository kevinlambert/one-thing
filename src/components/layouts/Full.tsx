import * as React from "react";
import AppHeader from "../ui/AppHeader";
import TabBar from "../ui/TabBar";

type Props = {
  children: React.ReactNode;
};

export default ({ children }: Props) => (
  <div className="app">
    <AppHeader isHideMenu={true}></AppHeader>
    <div className="body">{children}</div>
  </div>
);
