import React from "react";
import { Text, Divider, useTheme } from "@aws-amplify/ui-react";
import OneThingText from "../../../ui/OneThingText";

export default () => {
  const { tokens } = useTheme();

  return (
    <>
      <Text
        fontSize={tokens.fontSizes.large}
        marginBottom={tokens.space.medium}
      >
        <OneThingText /> today.
        <br />
        <OneThingText /> this week.
        <br />
        <OneThingText /> over the next 3 months.
      </Text>
      <Text marginBottom={tokens.space.medium}>
        Most of the time, your <i>today</i>, <i>this week</i>, and{" "}
        <i>3 months</i> <OneThingText /> will be related to each other.
      </Text>
      <Text>That’s what helps you gather momentum.</Text>
    </>
  );
};
