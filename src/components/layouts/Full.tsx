import * as React from "react";
import AppHeader from "../ui/AppHeader";
import TabBar from "../ui/TabBar";

type Props = {
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export default ({ footer, children }: Props) => (
  <div className="app">
    <AppHeader isHideMenu={true}></AppHeader>
    <div className="body">{children}</div>
    {footer ? <div className="footer">{footer}</div> : null}
  </div>
);
