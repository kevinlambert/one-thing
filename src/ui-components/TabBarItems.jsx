/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import IconLabel from "./IconLabel";
import { Flex } from "@aws-amplify/ui-react";
export default function TabBarItems(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="288px"
      height="unset"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TabBarItems")}
      {...rest}
    >
      <IconLabel
        display="flex"
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 4px 0px 4px"
        type="Default"
        {...getOverrideProps(overrides, "IconLabel36732718")}
      ></IconLabel>
      <IconLabel
        display="flex"
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 4px 0px 4px"
        type="Default"
        {...getOverrideProps(overrides, "IconLabel36732722")}
      ></IconLabel>
      <IconLabel
        display="flex"
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 4px 0px 4px"
        type="Default"
        {...getOverrideProps(overrides, "IconLabel36732744")}
      ></IconLabel>
    </Flex>
  );
}
