import React from "react";
import { Text, useTheme } from "@aws-amplify/ui-react";
import OneThingText from "../../../ui/OneThingText";

export default () => {
  const { tokens } = useTheme();

  return (
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
  );
};
