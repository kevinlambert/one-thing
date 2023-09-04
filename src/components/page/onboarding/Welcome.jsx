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
import { routePaths, routePathHelper } from "../../../AppRoutes";
import store from "../../../data/store";
import { updateAccount } from "../../../data/store/account";
import logger from "../../../logger";

export default () => {
  const navigate = useNavigate();
  const { tokens } = useTheme();
  let isLoading = false;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    termsAndConditions: false,
  });

  const [validationData, setValidationData] = useState({
    firstName: false,
    lastName: false,
    termsAndConditions: false,
  });

  const onNextHandler = async () => {
    if (isValidData()) {
      try {
        isLoading = true;
        await store.dispatch(
          updateAccount({
            id: store.getState().account.id,
            ...formData,
          })
        );
        isLoading = false;

        navigate(routePathHelper.focusPeriodThing());
      } catch (e) {
        logger.error(e);
      }
    }
  };

  const isValidData = () => {
    const keys = Object.keys(formData);

    const updatedValidationData = { ...validationData };

    keys.forEach((key, index) => {
      updatedValidationData[key] = !formData[key];
    });
    setValidationData(updatedValidationData);
    return !Object.values(updatedValidationData).includes(true);
  };

  const inputChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked || e.target.value.trim(),
    });
  };

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
        hasError={validationData.firstName}
        onChange={inputChangeHandler}
      ></TextField>
      <TextField
        name="lastName"
        marginBottom={tokens.space.large}
        label="Last name"
        errorMessage="Enter your last name"
        hasError={validationData.lastName}
        value={formData.lastName}
        onChange={inputChangeHandler}
      ></TextField>
      <CheckboxField
        label="I accept the terms and conditions"
        name="termsAndConditions"
        value={formData.termsAndConditions}
        errorMessage="You need to agree to the terms and conditions"
        hasError={validationData.termsAndConditions}
        onChange={inputChangeHandler}
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
