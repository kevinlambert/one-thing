import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { routePathHelper } from "../../../../AppRoutes";
import { Flex, Button, useTheme } from "@aws-amplify/ui-react";

import store from "../../../../data/store";
import { updateAccount } from "../../../../data/store/account";

export default ({ totalNumberOfSteps }) => {
  const { tokens } = useTheme();
  const navigate = useNavigate();

  let { step } = useParams();
  const stepInt = parseInt(step || "0");

  let isLoading = false;

  const onNextHandler = () => {
    isLoading = true;

    const nextStep = stepInt + 1;

    if (totalNumberOfSteps > nextStep) {
      navigate(routePathHelper.tour({ step: nextStep }));
    } else {
      // TODO: end of tour
      onSkipHandler();
    }
  };

  const onBackHandler = () => {
    isLoading = true;

    isLoading = true;

    const previousStep = stepInt - 1;

    if (previousStep >= 0) {
      navigate(routePathHelper.tour({ step: previousStep }));
    }
  };

  const onSkipHandler = () => {
    isLoading = true;

    const state = store.getState();

    store.dispatch(
      updateAccount({
        id: state.account.id,
        isTourDone: true,
      })
    );
    isLoading = false;
    navigate(routePathHelper.focusPeriodThing());
  };

  return (
    <Flex style={{ padding: "32px 16px" }} justifyContent={"space-between"}>
      <Button
        isFullWidth={false}
        isLoading={isLoading}
        variation="link"
        loadingText="Saving..."
        onClick={onSkipHandler}
        ariaLabel="Skip"
      >
        Skip
      </Button>
      <div>
        {stepInt > 0 ? (
          <Button
            isFullWidth={false}
            isLoading={isLoading}
            loadingText="Saving..."
            onClick={onBackHandler}
            ariaLabel="Back"
          >
            Back
          </Button>
        ) : null}
        <Button
          marginLeft={tokens.space.small}
          isFullWidth={false}
          isLoading={isLoading}
          variation="primary"
          loadingText="Saving..."
          onClick={onNextHandler}
          ariaLabel="Next"
        >
          Next
        </Button>
      </div>
    </Flex>
  );
};
