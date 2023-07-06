import * as React from "react";
import "./_modal.scss";

type Props = {
  isShow: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default ({ isShow, onClick }: Props) => {
  return (
    <div
      className="modal-background"
      style={isShow ? { display: "block" } : { display: "none" }}
      onClick={onClick}
    ></div>
  );
};
