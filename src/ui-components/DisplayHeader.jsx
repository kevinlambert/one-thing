/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Heading, Text, View } from "@aws-amplify/ui-react";
export default function DisplayHeader(props) {
  const { Title, Date, overrides, ...rest } = props;
  return (
    <View
      width="155px"
      height="81px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "DisplayHeader")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="0px"
        left="0px"
        level="1"
        title=""
        children="Today"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
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
        position="absolute"
        top="60px"
        left="1px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        Date=""
        children="Tuesday, 14 June 2023"
        {...getOverrideProps(overrides, "Tuesday, 14 June 2023")}
      ></Text>
    </View>
  );
}
