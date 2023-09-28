import React from "react";
import DefaultLayout from "../../layouts/Default";
import { useSelector } from "react-redux";

export default () => {
  const account = useSelector((state) => state.account);

  return (
    <DefaultLayout>
      <stripe-pricing-table
        pricing-table-id="prctbl_1NuuinEJuy3fXy7Hsvt5TQ93"
        publishable-key="pk_live_51No2JMEJuy3fXy7HLm1zNoy4bYSRosCZCPgsgPNF8Xb4HLqwlbRdD9fuiHH1TElHDkDPYjwFJA2MqkdxEZC1LAYj00K6QCgkWd"
        client-reference-id={account.userID}
        customer-email={account.email}
      ></stripe-pricing-table>
    </DefaultLayout>
  );
};
