import React, { useState } from "react";
import { useSelector } from "react-redux";
import OneThingText from "../ui/OneThingText";
import { updateThing } from "../../data/store/previousThing";
import store from "../../data/store";

import {
  Button,
  Divider,
  Flex,
  Text,
  useTheme,
  RadioGroupField,
  Radio,
} from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";

export default () => {
  const { tokens } = useTheme();
  let { periodInterval, periodIncrement } = useParams();
  periodIncrement = parseInt(periodIncrement);
  let isLoading = false;

  const [isDone, setIsDone] = useState(null);
  const [validationError, setValidationError] = useState(false);

  const firstName = useSelector((state) => state.account.firstName);
  const previousThing = useSelector(
    (state) => state.previousThing[periodInterval][periodIncrement]
  );

  const onNextHandler = async () => {
    isLoading = true;
    if (isDone !== null) {
      await store.dispatch(
        updateThing({
          id: previousThing.id,
          isDone: isDone,
        })
      );
    } else {
      setValidationError(true);
    }
  };

  const onChangeHandler = (e) => {
    setIsDone(e.target.value === "true");
    setValidationError(false);
  };

  return (
    <>
      <Text fontSize={tokens.fontSizes.xxl} marginBottom={tokens.space.medium}>
        Hey, {firstName}
      </Text>
      <Divider size="small" marginBottom={tokens.space.medium} />
      <Text fontSize={tokens.fontSizes.xl} marginBottom={tokens.space.medium}>
        Your previous <OneThingText /> was: {previousThing.text}
      </Text>

      <Text fontSize={tokens.fontSizes.xl} marginBottom={tokens.space.medium}>
        Where you able to get to this?
      </Text>
      <RadioGroupField
        name="isPreviousOneThingDone"
        direction="row"
        size="large"
        onChange={onChangeHandler}
        errorMessage="This is a required field. Please select an option."
        hasError={validationError}
      >
        <Radio value="true">Yes</Radio>
        <Radio value="false">No</Radio>
      </RadioGroupField>
      <Flex justifyContent="flex-end" marginTop={tokens.space.medium}>
        <Button
          isFullWidth={false}
          isLoading={isLoading}
          variation="primary"
          loadingText="Loading..."
          onClick={onNextHandler}
          ariaLabel="Next"
        >
          Next
        </Button>
      </Flex>
    </>
  );
};
