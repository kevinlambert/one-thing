import React, { useState } from "react";
import FullLayout from "../../../layouts/Full";
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
      <Heading level={1}>Welcome</Heading>
      <Text marginBottom={tokens.space.large} fontSize={tokens.fontSizes.large}>
        Let's get you setup
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
