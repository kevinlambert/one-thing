import * as React from "react";
import "./_icon-button.scss";

type Props = {
  icon: React.ReactNode;
  label: string;
};

export default ({ icon, label }: Props) => (
  <div className="icon-button">
    {icon}
    <div className="icon-button__label">{label}</div>
  </div>
);
