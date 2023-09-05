import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { routePathHelper } from "../../../../AppRoutes";
import FullLayout from "../../../layouts/Full";
import OneThingText from "../../../ui/OneThingText";
import {
  Divider,
  Flex,
  Button,
  Heading,
  Text,
  useTheme,
} from "@aws-amplify/ui-react";

import store from "../../../../data/store";
import { updateAccount } from "../../../../data/store/account";

export default () => {
  const { tokens } = useTheme();
  let { periodInterval, periodIncrement } = useParams();
  periodIncrement = parseInt(periodIncrement);

  return (
    <FullLayout>
      <Heading level={1}>Reflect</Heading>
    </FullLayout>
  );
};
