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
import { Divider, Flex, Text, View } from "@aws-amplify/ui-react";
import IconLabel from "./IconLabel";
export default function Header(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { type: "Default" },
      overrides: {
        "My one thing": {},
        Menu: {},
        MenuContainer: {},
        Content: {},
        Divider: {},
        Header: {},
      },
    },
    {
      variantValues: { type: "NoMenu" },
      overrides: {
        "My one thing": {},
        Menu: {},
        MenuContainer: { display: "none" },
        Content: {},
        Divider: {},
        Header: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="column"
      width="unset"
      height="61px"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="8px 16px 8px 16px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <View
        width="unset"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="124px"
          height="28px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="8.5px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="My one thing"
          {...getOverrideProps(overrides, "My one thing")}
        ></Text>
        <View
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          right="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuContainer")}
        >
          <IconLabel
            display="flex"
            gap="0"
            direction="column"
            width="unset"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 4px 0px 4px"
            type="Default"
            {...getOverrideProps(overrides, "Menu")}
          ></IconLabel>
        </View>
      </View>
      <Divider
        width="unset"
        height="1px"
        display="none"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </Flex>
  );
}
