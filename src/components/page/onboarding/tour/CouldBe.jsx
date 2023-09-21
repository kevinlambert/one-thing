import React from "react";
import { Text, View, useTheme } from "@aws-amplify/ui-react";
import OneThingText from "../../../ui/OneThingText";

export default () => {
  const { tokens } = useTheme();

  return (
    <View fontSize={tokens.fontSizes.large}>
      <ul style={{ marginTop: "0" }}>
        <li>relational</li>
        <li>emotional</li>
        <li>spiritual</li>
        <li>physical</li>
        <li>financial</li>
        <li>personal</li>
        <li>vocational</li>
        <li>social</li>
        <li>charitable</li>
      </ul>
      <Text>Or anything else you can think of...</Text>
    </View>
  );
};
