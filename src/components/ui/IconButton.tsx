import * as React from "react";
import "./_icon-button.scss";

type Props = {
  icon: React.ReactNode;
  label: string;
  isUnderline?: boolean;
};

export default ({ icon, label, isUnderline }: Props) => (
  <div
    className={"icon-button" + (isUnderline ? " icon-button--underline" : "")}
  >
    {icon}
    <div className="icon-button__label">{label}</div>
  </div>
);
