import React from "react";

import { Text, useTheme } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";

const OneThingText = () => (
  <>
    <span>ONE</span>
    <span> Thing</span>
  </>
);

export default () => {
  const { tokens } = useTheme();
  let { periodInterval, periodIncrement } = useParams();
  periodIncrement = parseInt(periodIncrement);

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
    <Text fontSize={tokens.fontSizes.xl}>
      Take a moment to think about the{" "}
      <span style={{ fontWeight: "600" }}>
        <OneThingText />
      </span>{" "}
      that you would like to focus on{"  "}
      <span style={{ fontWeight: "600" }}>{periodText()}</span>.
    </Text>
  );
};
