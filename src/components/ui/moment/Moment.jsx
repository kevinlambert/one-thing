import React from "react";
import { useSelector } from "react-redux";
import { routePathHelper } from "../../../AppRoutes";

import { Button, Heading, Text, useTheme } from "@aws-amplify/ui-react";
import { useNavigate, useParams } from "react-router-dom";
import MomentMessage from "./MomentMessage";

export default () => {
  const { tokens } = useTheme();
  const navigate = useNavigate();
  let { periodInterval, periodIncrement } = useParams();
  periodIncrement = parseInt(periodIncrement);

  let isLoading = false;

  const onNextHandler = () => {
    isLoading = true;
    navigate(routePathHelper.thingEdit({ periodInterval, periodIncrement }));
  };

  const firstName = useSelector((state) => state.account.firstName);

  return (
    <>
      <Heading level={1} marginBottom={tokens.space.large}>
        Hey, {firstName}
      </Heading>
      <MomentMessage />
      <Button
        marginTop={tokens.space.xxxl}
        isFullWidth={false}
        isLoading={isLoading}
        variation="primary"
        loadingText="Loading..."
        onClick={onNextHandler}
        ariaLabel="Next"
      >
        Next
      </Button>
    </>
  );
};
