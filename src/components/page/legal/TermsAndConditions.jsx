import React from "react";
import FullLayout from "../../layouts/Full";
import { Button, Flex, useTheme } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import TermsContent from "./TermsAndConditionsContent";

export default () => {
  const navigate = useNavigate();
  const { tokens } = useTheme();
  let isLoading = false;

  const onNextHandler = async () => {
    navigate(-1);
  };

  const Footer = () => (
    <Flex justifyContent={"end"} padding={tokens.space.medium}>
      <Button
        marginTop={tokens.space.xxxl}
        isFullWidth={false}
        isLoading={isLoading}
        variation="primary"
        loadingText="Saving..."
        onClick={onNextHandler}
        ariaLabel="OK"
      >
        OK
      </Button>
    </Flex>
  );

  return (
    <FullLayout footer={Footer()}>
      <TermsContent />
    </FullLayout>
  );
};
