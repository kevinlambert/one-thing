import React, { useState } from "react";
import FullLayout from "../../layouts/Full";
import { routePathHelper } from "../../../AppRoutes";

import { Button, Heading, Text, useTheme } from "@aws-amplify/ui-react";
import { useNavigate, useParams } from "react-router-dom";

import "./_text.scss";

export default () => {
  const { tokens } = useTheme();
  const navigate = useNavigate();
  let { periodInterval, periodIncrement } = useParams();
  periodIncrement = parseInt(periodIncrement);

  let isLoading = false;

  const onNextHandler = () => {
    isLoading = true;
    navigate(routePathHelper.thing({ periodInterval, periodIncrement }));
  };

  const periodText = () => {
    if (periodInterval === "day" && periodIncrement === 0) {
      return "today";
    } else if (periodIncrement === 0) {
      return `this ${periodInterval}`;
    } else {
      return `over the next ${periodIncrement} ${periodInterval}s`;
    }
  };

  return (
    <FullLayout>
      <Heading level={1} marginBottom={tokens.space.large}>
        My ONE Thing
      </Heading>
      <Text marginBottom={tokens.space.large} fontSize={tokens.fontSizes.large}>
        Take a moment to think about ONE Thing that you would like to focus on{" "}
        {periodText()}.
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
