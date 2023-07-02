import * as React from "react";
import "./_thing-edit.scss";
import Button from "./Button";

type Props = {
  content: string;
  onSave: React.MouseEventHandler<HTMLButtonElement>;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
};

export default ({ content, onSave, onCancel }: Props) => (
  <div className="thing-edit">
    <textarea className="thing-edit-text margin-bottom-16">{content}</textarea>
    <div className="thing-edit-controls">
      <Button displayType={"secondary"} onClick={onCancel}>
        Cancel
      </Button>
      <Button onClick={onSave}>Save</Button>
    </div>
  </div>
);
