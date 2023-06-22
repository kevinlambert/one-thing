/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function OneThingDisplay(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="289px"
      height="276px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(220,222,224,1)"
      borderRadius="16px"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "OneThingDisplay")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(4,52,149,1)"
        lineHeight="30px"
        textAlign="center"
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
        children="This is my one thing"
        {...getOverrideProps(overrides, "This is my one thing")}
      ></Text>
    </Flex>
  );
}
