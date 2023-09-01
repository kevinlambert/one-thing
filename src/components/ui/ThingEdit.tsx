import * as React from "react";
import "./_thing-edit.scss";
import { TextAreaField, Button, Flex, useTheme } from "@aws-amplify/ui-react";

type Props = {
  content: string;
  onSave: any;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
};

export default ({ content, onSave, onCancel }: Props) => {
  const { tokens } = useTheme();

  const onChangeHandler = (e: any) => {
    content = e.currentTarget.value;
  };

  const onSaveHandler = () => {
    onSave(content);
  };

  return (
    <div className="thing-edit">
      <TextAreaField
        descriptiveText="Enter your one thing"
        label="Your ONE Thing"
        labelHidden={true}
        name="onething_content"
        defaultValue={content}
        onChange={onChangeHandler}
      />

      <Flex justifyContent="space-between" marginTop={tokens.space.small}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button variation="primary" onClick={onSaveHandler}>
          Save
        </Button>
      </Flex>
    </div>
  );
};
