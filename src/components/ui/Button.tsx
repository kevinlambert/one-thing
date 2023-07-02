import * as React from "react";
import "./_button.scss";

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onChange?: React.FormEventHandler<HTMLButtonElement>;
  displayType?: "primary" | "secondary" | "tertiary";
};

export default ({
  displayType = "primary",
  children,
  onClick,
  onChange,
}: Props) => (
  <button className={displayType} onClick={onClick} onChange={onChange}>
    {children}
  </button>
);
