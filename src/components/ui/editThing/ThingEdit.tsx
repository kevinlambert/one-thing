import React, { useState } from "react";
import "./_thing-edit.scss";
import {
  TextAreaField,
  Button,
  Flex,
  Divider,
  useTheme,
} from "@aws-amplify/ui-react";
import Related, { PERIOD_INTERVAL, VALUES } from "./Related";
import { useParams } from "react-router-dom";

type Props = {
  content: string;
  relatedTo: string;
  onSave: any;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
};

export default ({ content, relatedTo, onSave, onCancel }: Props) => {
  const { tokens } = useTheme();
  let { periodInterval } = useParams();
  const [showRelatedError, setShowRelatedError] = useState<boolean>(false);
  const [relateToSelection, setRelateToSelection] = useState<string[]>([]);
  const [contentText, setContentText] = useState<string>(content || "");

  const onChangeHandler = (e: any) => {
    setContentText(e.currentTarget.value);
  };

  const onSaveHandler = () => {
    if (relateToSelection.length) {
      console.log(contentText);
      onSave({ content: contentText, relateToSelection });
      // at least one option was selected
    } else {
      // prompt  error message for related
      setShowRelatedError(true);
    }
  };

  const onRelatedChangeHandler = (selection: string[]) => {
    setRelateToSelection(selection);

    if (selection.length) {
      setShowRelatedError(false);
    }
  };

  return (
    <div className="thing-edit">
      <TextAreaField
        descriptiveText="Enter your one thing"
        label="Your ONE Thing"
        labelHidden={true}
        name="onething_content"
        defaultValue={contentText}
        onChange={onChangeHandler}
      />
      <Related
        periodInterval={periodInterval as PERIOD_INTERVAL}
        relatedTo={relatedTo as unknown as VALUES[]}
        onChange={onRelatedChangeHandler}
        showError={showRelatedError}
      />
      <Divider size="small" marginTop={tokens.space.xl} />
      <Flex justifyContent="space-between" marginTop={tokens.space.small}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button variation="primary" onClick={onSaveHandler}>
          Save
        </Button>
      </Flex>
    </div>
  );
};
