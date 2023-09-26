import React, { ChangeEvent, useState, useEffect } from "react";
import {
  Flex,
  Text,
  CheckboxField,
  Divider,
  useTheme,
  CheckboxFieldProps,
} from "@aws-amplify/ui-react";
import OneThingText from "../OneThingText";
import { Value } from "sass";

export enum PERIOD_INTERVAL {
  MONTH = "MONTH",
  WEEK = "WEEK",
  DAY = "DAY",
}

export enum VALUES {
  MONTH = "MONTH3",
  WEEK = "WEEK0",
  NONE = "NONE",
}

type Props = {
  periodInterval: PERIOD_INTERVAL;
  relatedTo: VALUES[];
  onChange: any;
  showError?: boolean;
};

export default ({
  periodInterval,
  relatedTo,
  onChange,
  showError = false,
}: Props) => {
  const { tokens } = useTheme();

  const [selection, setSelection] = useState<VALUES[]>(relatedTo || []);

  const interval = periodInterval.toUpperCase();

  useEffect(() => {
    if (Array.isArray(relatedTo)) setSelection(relatedTo);
  }, [relatedTo]);

  useEffect(() => {
    onChange(selection);
  }, [selection]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === VALUES.NONE) {
      selection.includes(VALUES.NONE)
        ? setSelection([])
        : setSelection([VALUES.NONE]);
    } else {
      const valueTemp = e.target.value as VALUES;

      selection.includes(valueTemp)
        ? setSelection(
            selection.filter(
              (item) => item !== valueTemp && item !== VALUES.NONE
            )
          )
        : setSelection([
            valueTemp,
            ...selection.filter((item) => item !== VALUES.NONE),
          ]);
    }
  };

  return interval !== PERIOD_INTERVAL.MONTH ? (
    <Flex marginTop={tokens.space.medium}>
      <Text style={{ flexBasis: "50%" }}>
        Is this <OneThingText /> related to your:
      </Text>
      <Flex gap={tokens.space.xxs} direction={"column"}>
        {showError ? (
          <Text color={tokens.colors.red[60]}>
            You need to select at least one option below:
          </Text>
        ) : null}
        <CheckboxField
          label="3 Month"
          name="3Month"
          value={VALUES.MONTH}
          checked={selection.includes(VALUES.MONTH)}
          onChange={onChangeHandler}
        />
        {interval !== PERIOD_INTERVAL.WEEK ? (
          <CheckboxField
            label="This Week"
            name="ThisWeek"
            value={VALUES.WEEK}
            checked={selection.includes(VALUES.WEEK)}
            onChange={onChangeHandler}
          />
        ) : null}
        <Divider size="small" />
        <CheckboxField
          label="None"
          name="None"
          value={VALUES.NONE}
          checked={selection.includes(VALUES.NONE)}
          onChange={onChangeHandler}
        />
      </Flex>
    </Flex>
  ) : null;
};
