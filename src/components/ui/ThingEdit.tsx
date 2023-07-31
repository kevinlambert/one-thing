import * as React from "react";
import "./_thing-edit.scss";
import Button from "./Button";

type Props = {
  content: string;
  onSave: any;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
};

export default ({ content, onSave, onCancel }: Props) => {
  const onChangeHandler = (e: any) => {
    content = e.target.value;
  };

  const onSaveHandler = () => {
    onSave(content);
  };

  return (
    <div className="thing-edit">
      <textarea
        className="thing-edit-text margin-bottom-16"
        defaultValue={content}
        onChange={onChangeHandler}
      ></textarea>
      <div className="thing-edit-controls">
        <Button displayType={"secondary"} onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onSaveHandler}>Save</Button>
      </div>
    </div>
  );
};
