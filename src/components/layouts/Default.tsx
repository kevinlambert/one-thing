import * as React from "react";
import AppHeader from "../ui/AppHeader";
import TabBar from "../ui/TabBar";

type Props = {
  children: React.ReactNode;
};

export default ({ children }: Props) => (
  <div className="app">
    <AppHeader></AppHeader>
    <div className="body">{children}</div>
    <TabBar></TabBar>
  </div>
);
