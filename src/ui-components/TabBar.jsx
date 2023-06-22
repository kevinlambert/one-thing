/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import TabBarItems from "./TabBarItems";
import { Flex } from "@aws-amplify/ui-react";
export default function TabBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="21px 20px 21px 20px"
      backgroundColor="rgba(239,240,240,1)"
      {...getOverrideProps(overrides, "TabBar")}
      {...rest}
    >
      <TabBarItems
        display="flex"
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TabBarItems")}
      ></TabBarItems>
    </Flex>
  );
}
