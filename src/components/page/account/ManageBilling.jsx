import React from "react";
import DefaultLayout from "../../layouts/Default";
import { useSelector } from "react-redux";

export default () => {
  const account = useSelector((state) => state.account);

  return (
    <DefaultLayout>
      We use stripe to manage our billing
      <a href="https://billing.stripe.com/p/login/cN2eXi85j894fXG8ww">
        billing
      </a>
    </DefaultLayout>
  );
};
