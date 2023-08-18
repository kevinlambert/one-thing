import * as React from "react";
import "./_thing-display.scss";

type Props = {
  content: string;
};

export default ({ content = "" }: Props) => (
  <div className="thing-display">{content}</div>
);
