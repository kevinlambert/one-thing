/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function IconLabel(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { type: "Default" },
      overrides: { calendar_month: {}, Label: {}, IconLabel: {} },
    },
    {
      variantValues: { type: "WithBorder" },
      overrides: {
        calendar_month: {},
        Label: {},
        IconLabel: {
          width: "64px",
          height: "64px",
          padding: "3px 3px 3px 3px",
          border: "1px SOLID rgba(220,222,224,1)",
        },
      },
    },
    {
      variantValues: { type: "NextTo" },
      overrides: {
        calendar_month: {},
        Label: {},
        IconLabel: { gap: "4px", direction: "row" },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 4px 0px 4px"
      display="flex"
      {...getOverrideProps(overrides, "IconLabel")}
      {...rest}
    >
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "calendar_month")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Label"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
    </Flex>
  );
}
