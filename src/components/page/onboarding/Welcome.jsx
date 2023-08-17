import React, { useState } from "react";
import FullLayout from "../../layouts/Full";
import {
  TextField,
  CheckboxField,
  Button,
  Heading,
  Text,
  useTheme,
} from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../../AppRoutes";
import store from "../../../store/store";
import { updateAccount } from "../../../store/account";
import logger from "../../../logger";

import "./_text.scss";

export default () => {
  const navigate = useNavigate();
  const { tokens } = useTheme();
  let isLoading = false;

  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    termsAndConditions: null,
  });

  const onNextHandler = async () => {
    try {
      console.log(formData);
      await store.dispatch(
        updateAccount({
          id: store.getState().account.id,
          ...formData,
        })
      );
      isLoading = false;

      navigate(routePaths.THING.MOMENT);
    } catch (e) {
      logger.error(e);
    }
  };

  function inputChange(e) {
    setFormData(e.target.value);
  }

  return (
    <FullLayout>
      <Heading level={1}>Welcome</Heading>
      <Text marginBottom={tokens.space.large} fontSize={tokens.fontSizes.large}>
        Let's get you setup
      </Text>

      <TextField
        name="firstName"
        marginBottom={tokens.space.small}
        label="First name"
        errorMessage="Enter your first name"
        value={formData.firstName}
      ></TextField>
      <TextField
        name="lastName"
        marginBottom={tokens.space.large}
        label="Last name"
        errorMessage="Enter your first name"
        value={formData.lastName}
      ></TextField>
      <CheckboxField
        label="I accept the terms and conditions"
        name="termandconditions"
        value={formData.termsAndConditions}
      />
      <Button
        marginTop={tokens.space.xxxl}
        isFullWidth={false}
        isLoading={isLoading}
        variation="primary"
        loadingText="Saving..."
        onClick={onNextHandler}
        ariaLabel="Next"
      >
        Next
      </Button>
    </FullLayout>
  );
};
