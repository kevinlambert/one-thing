import React from "react";
import { Text, View, useTheme } from "@aws-amplify/ui-react";
import OneThingText from "../../../ui/OneThingText";

export default () => {
  const { tokens } = useTheme();

  return (
    <View fontSize={tokens.fontSizes.large}>
      <Text marginBottom={tokens.space.xxs}>
        <OneThingText /> is <i>not</i> a{" "}
        <span style={{ color: tokens.colors.red[80] }}>task list</span>
      </Text>
      <Text>
        <OneThingText /> is <i>not</i> a{" "}
        <span style={{ color: tokens.colors.red[80] }}>to do list</span>
      </Text>
    </View>
  );
};
