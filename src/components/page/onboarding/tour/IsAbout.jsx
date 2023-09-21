import React from "react";
import { Flex, Text, Heading, useTheme } from "@aws-amplify/ui-react";
import OneThingText from "../../../ui/OneThingText";

export default () => {
  const { tokens } = useTheme();

  return (
    <Flex
      fontSize={tokens.fontSizes.large}
      alignItems={"center"}
      gap={"0"}
      direction={"column"}
    >
      <Heading level={5}>VISION</Heading>
      <Text marginBottom={tokens.space.large}> Where do I want to go?</Text>
      <Heading level={5}>HOW</Heading>
      <Text marginBottom={tokens.space.large}>How do I get there?</Text>
      <Heading level={5}>FOCUS</Heading>
      <Text>Steer clear of distractions with</Text>
      <Text>"What can I do today?"</Text>
    </Flex>
  );
};
