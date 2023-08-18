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
    <Text fontSize={tokens.fontSizes.large}>
      Take a moment to think about the
      <br />
      <span
        style={{ fontSize: "28px", fontWeight: "600", fontStyle: "italic" }}
      >
        <OneThingText />
      </span>{" "}
      that you would like to focus on{"  "}
      <span style={{ fontSize: "32px", fontWeight: "700" }}>
        {periodText()}
      </span>
      .
    </Text>
  );
};
