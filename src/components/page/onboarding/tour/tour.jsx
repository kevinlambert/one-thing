import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { routePathHelper } from "../../../../AppRoutes";
import FullLayout from "../../../layouts/Full";
import OneThingText from "../../../ui/OneThingText";
import {
  Divider,
  Flex,
  Button,
  Heading,
  Text,
  useTheme,
} from "@aws-amplify/ui-react";

import store from "../../../../store/store";
import { updateAccount } from "../../../../store/account";

const WorldOfDistraction = () => {
  const { tokens } = useTheme();

  return (
    <>
      <Divider
        size="small"
        marginTop={tokens.space.xxl}
        marginBottom={tokens.space.small}
      />
      <Text fontSize={tokens.fontSizes.xxl}>
        In a world of distraction
        <br />
        there is{" "}
        <span style={{ fontWeight: "bold" }}>
          <OneThingText />
        </span>
        <br />
        <span style={{ fontWeight: "bold" }}>you</span> can do
      </Text>
    </>
  );
};

const NOT = () => {
  const { tokens } = useTheme();

  return (
    <div>
      <Text
        marginTop={tokens.space.medium}
        fontSize={tokens.fontSizes.xl}
        fontWeight={tokens.fontWeights.medium}
      >
        What is <OneThingText />?
      </Text>
      <Divider
        size="small"
        marginTop={tokens.space.xs}
        marginBottom={tokens.space.large}
      />
      <Text fontSize={tokens.fontSizes.large}>
        Lets's start with what it is NOT:
        <ul>
          <li>
            <OneThingText /> is{" "}
            <span style={{ textDecoration: "underline" }}>NOT</span> a{" "}
            <span style={{ fontWeight: "bold" }}>task list</span>
          </li>
          <li>
            <OneThingText /> is{" "}
            <span style={{ textDecoration: "underline" }}>NOT</span> a{" "}
            <span style={{ fontWeight: "bold" }}>todo list</span>
          </li>
        </ul>
      </Text>
    </div>
  );
};

const IS = () => {
  const { tokens } = useTheme();

  return (
    <div>
      <Text
        marginTop={tokens.space.medium}
        fontSize={tokens.fontSizes.xl}
        fontWeight={tokens.fontWeights.medium}
      >
        <OneThingText /> is:
      </Text>
      <Divider
        size="small"
        marginTop={tokens.space.xs}
        marginBottom={tokens.space.large}
      />
      <Text fontSize={tokens.fontSizes.large}>
        <ul>
          <li>part VISION - where do I want to go</li>
          <li>part HOW - how do I get there</li>
          <li>part FOCUS - avoid distractions; what can i do today</li>
        </ul>
      </Text>
    </div>
  );
};

const VisionPart = () => {
  const { tokens } = useTheme();

  return (
    <div>
      <Text
        marginTop={tokens.space.medium}
        fontSize={tokens.fontSizes.xl}
        fontWeight={tokens.fontWeights.medium}
      >
        The VISION part
      </Text>
      <Divider
        size="small"
        marginTop={tokens.space.xs}
        marginBottom={tokens.space.large}
      />
      <Text
        fontSize={tokens.fontSizes.large}
        fontWeight={tokens.fontWeights.medium}
      >
        3 month focus period
      </Text>
      <Text fontSize={tokens.fontSizes.large}>
        <ul>
          <li>Where do I want to be in 3 months time</li>
          <li>
            3 months is long enough in the future to get momentum and close
            enough to give a sense of urgency.
          </li>
        </ul>
      </Text>
    </div>
  );
};

const FocusPart = () => {
  const { tokens } = useTheme();

  return (
    <div>
      <Text
        marginTop={tokens.space.medium}
        fontSize={tokens.fontSizes.xl}
        fontWeight={tokens.fontWeights.medium}
      >
        The FOCUS part
      </Text>
      <Divider
        size="small"
        marginTop={tokens.space.xs}
        marginBottom={tokens.space.large}
      />
      <Text
        fontSize={tokens.fontSizes.large}
        fontWeight={tokens.fontWeights.medium}
      >
        This week & today
      </Text>
      <Text fontSize={tokens.fontSizes.large}>
        <ul>
          <li>
            You are prompted to consider what you will do{" "}
            <span style={{ textDecoration: "underline" }}>this week</span>{" "}
            towards your 3 Month <OneThingText />
          </li>
          <li>
            You are prompted to consider what you will do{" "}
            <span style={{ textDecoration: "underline" }}>today</span> towards
            your week <OneThingText />.
          </li>
          <li>
            You are reminded daily what your <OneThingText /> is.
          </li>
        </ul>
      </Text>
    </div>
  );
};

const HowPart = () => {
  const { tokens } = useTheme();

  return (
    <div>
      <Text
        marginTop={tokens.space.medium}
        fontSize={tokens.fontSizes.xl}
        fontWeight={tokens.fontWeights.medium}
      >
        The HOW part
      </Text>
      <Divider
        size="small"
        marginTop={tokens.space.xs}
        marginBottom={tokens.space.large}
      />
      <Text
        fontSize={tokens.fontSizes.large}
        fontWeight={tokens.fontWeights.medium}
      >
        Thinking...
      </Text>
      <Text fontSize={tokens.fontSizes.large}>
        <ul>
          <li>
            Your <span style={{ textDecoration: "underline" }}>this week</span>{" "}
            <OneThingText /> and your{" "}
            <span style={{ textDecoration: "underline" }}>today</span>{" "}
            <OneThingText /> helps you to think about what steps you will take
            in the immediate to move toward your 3 month <OneThingText />.
          </li>
        </ul>
      </Text>
    </div>
  );
};

const Summary = () => {
  const { tokens } = useTheme();

  return (
    <div>
      <Text
        marginTop={tokens.space.medium}
        fontSize={tokens.fontSizes.xl}
        fontWeight={tokens.fontWeights.medium}
      >
        The Summary
      </Text>
      <Divider
        size="small"
        marginTop={tokens.space.xs}
        marginBottom={tokens.space.large}
      />
      <Text
        fontSize={tokens.fontSizes.large}
        fontWeight={tokens.fontWeights.medium}
        marginBottom={tokens.space.medium}
      >
        It's all about your <OneThingText /> :)
      </Text>
      <Text
        fontSize={tokens.fontSizes.large}
        marginBottom={tokens.space.medium}
      >
        - <OneThingText /> today.
        <br />
        - <OneThingText /> this week.
        <br />
        - <OneThingText /> over the next 3 months.
      </Text>
      <Text
        fontSize={tokens.fontSizes.large}
        marginBottom={tokens.space.medium}
      >
        Ideally your today, this week, and 3 month <OneThingText /> should be
        related to each other. That helps give you momentum.
      </Text>
    </div>
  );
};

const stepContent = [
  WorldOfDistraction,
  NOT,
  IS,
  VisionPart,
  FocusPart,
  HowPart,
  Summary,
];

const Footer = () => {
  const { tokens } = useTheme();
  const navigate = useNavigate();

  let { step } = useParams();
  const stepInt = parseInt(step || "0");

  let isLoading = false;

  const onNextHandler = () => {
    isLoading = true;

    const nextStep = stepInt + 1;

    if (stepContent.length > nextStep) {
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

export default () => {
  const { tokens } = useTheme();
  let { step } = useParams();
  const stepInt = parseInt(step || "0");

  const Content = stepContent[stepInt];

  return (
    <FullLayout footer={<Footer />}>
      <Heading level={1}>Tour</Heading>
      <Content />
    </FullLayout>
  );
};
