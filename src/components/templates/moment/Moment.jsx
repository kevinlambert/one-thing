import React from "react";
import { useSelector } from "react-redux";
import { routePathHelper } from "../../../AppRoutes";

import { Button, Divider, Flex, Text, useTheme } from "@aws-amplify/ui-react";
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

  const onImStuckHandler = () => {
    isLoading = true;
    navigate(routePathHelper.thingEdit({ periodInterval, periodIncrement }));
  };

  const firstName = useSelector((state) => state.account.firstName);

  return (
    <>
      <Text fontSize={tokens.fontSizes.xxl} marginBottom={tokens.space.medium}>
        Hey {firstName},
      </Text>
      <Divider size="small" marginBottom={tokens.space.medium} />
      <MomentMessage />
      <Flex justifyContent="flex-end" marginTop={tokens.space.medium}>
        {/* <Button
          isFullWidth={false}
          isLoading={isLoading}
          variation="default"
          loadingText="Loading..."
          onClick={onImStuckHandler}
          ariaLabel="I'm stuck"
        >
          I'm stuck
        </Button> */}
        <Button
          isFullWidth={false}
          isLoading={isLoading}
          variation="primary"
          loadingText="Loading..."
          onClick={onNextHandler}
          ariaLabel="I'm ready"
        >
          I'm ready
        </Button>
      </Flex>
    </>
  );
};
