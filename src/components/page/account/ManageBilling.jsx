import React from "react";
import DefaultLayout from "../../layouts/Default";
import { useSelector } from "react-redux";
import { Link, Text } from "@aws-amplify/ui-react";

export default () => {
  const account = useSelector((state) => state.account);
  const user = useSelector((state) => state.user);

  const isDev = () => process.env.NODE_ENV === "development";

  const STRIPE_CUSTOMER_PORTAL =
    "https://billing.stripe.com/p/login/cN2eXi85j894fXG8ww";
  const STRIPE_CUSTOMER_PORTAL_TEST =
    "https://billing.stripe.com/p/login/test_9AQbKR5sq0RKeDC3cc";

  const CUSTOMER_PORTAL_URL = `${
    isDev() ? STRIPE_CUSTOMER_PORTAL_TEST : STRIPE_CUSTOMER_PORTAL
  }?prefilled_email=${user.email}`;

  return (
    <DefaultLayout>
      <Text>We use stripe to manage our billing</Text>

      <Link href={CUSTOMER_PORTAL_URL}>Manage billing on Stripe</Link>
    </DefaultLayout>
  );
};
