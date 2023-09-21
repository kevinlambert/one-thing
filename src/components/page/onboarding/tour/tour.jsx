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
  View,
  useTheme,
} from "@aws-amplify/ui-react";

import store from "../../../../data/store";
import { updateAccount } from "../../../../data/store/account";
import Footer from "./Footer";
import Tagline from "./Tagline";
import ItsAllAbout from "./ItsAllAbout";
import CouldBe from "./CouldBe";
import IsNot from "./IsNot";
import IsAbout from "./IsAbout";

const Template = ({ subHeading, content }) => {
  const { tokens } = useTheme();

  return (
    <>
      <Text marginTop={tokens.space.medium} fontSize={tokens.fontSizes.xl}>
        {subHeading}
      </Text>
      <Divider
        size="small"
        marginTop={tokens.space.xs}
        marginBottom={tokens.space.large}
      />
      {content()}
    </>
  );
};

const TaglineTemplate = () => <Template subHeading={""} content={Tagline} />;

const ItsAllAboutTemplate = () => (
  <Template
    subHeading={
      <>
        It's all about your <OneThingText />
      </>
    }
    content={ItsAllAbout}
  />
);
const CouldBeTemplate = () => (
  <Template
    subHeading={
      <>
        Your <OneThingText /> could be:
      </>
    }
    content={CouldBe}
  />
);
const IsNotTemplate = () => (
  <Template
    subHeading={
      <>
        <OneThingText /> is <i>not</i>:
      </>
    }
    content={IsNot}
  />
);
const IsAboutTemplate = () => (
  <Template
    subHeading={
      <>
        <OneThingText /> is about:
      </>
    }
    content={IsAbout}
  />
);

const stepContent = [
  TaglineTemplate,
  ItsAllAboutTemplate,
  CouldBeTemplate,
  IsNotTemplate,
  IsAboutTemplate,
];

export default () => {
  const { tokens } = useTheme();
  let { step } = useParams();
  const stepInt = parseInt(step || "0");

  const Content = stepContent[stepInt];

  return (
    <FullLayout footer={<Footer totalNumberOfSteps={stepContent.length} />}>
      <Heading level={1}>Tour</Heading>
      <Content />
    </FullLayout>
  );
};
