import * as React from "react";
import "./_icon-button.scss";

type Props = {
  icon: React.ReactNode;
  label: string;
  isUnderline?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default ({ icon, label, isUnderline, onClick }: Props) => (
  <div
    onClick={onClick}
    className={"icon-button" + (isUnderline ? " icon-button--underline" : "")}
  >
    {icon}
    <div className="icon-button__label">{label}</div>
  </div>
);
