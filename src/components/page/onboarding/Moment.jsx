import React, { useState } from "react";
import FullLayout from "../../layouts/Full";
import {
  TextField,
  CheckboxField,
  Button,
  Heading,
  Text,
  useTheme,
} from "@aws-amplify/ui-react";

import "./_text.scss";

export default () => {
  const { tokens } = useTheme();
  let isLoading = false;

  const onNextHandler = () => {
    isLoading = true;
  };

  return (
    <FullLayout>
      <Heading level={1} marginBottom={tokens.space.large}>
        My ONE Thing
      </Heading>
      <Text marginBottom={tokens.space.large} fontSize={tokens.fontSizes.large}>
        Take a moment to think about ONE Thing that you would like to focus on
        over the next three months.
      </Text>

      <Button
        marginTop={tokens.space.xxxl}
        isFullWidth={false}
        isLoading={isLoading}
        variation="primary"
        loadingText="Saving..."
        onClick={onNextHandler}
        ariaLabel="Next"
      >
        Next
      </Button>
    </FullLayout>
  );
};
