import React from "react";
import DefaultLayout from "../../layouts/Default";
import { useSelector } from "react-redux";

export default () => {
  const account = useSelector((state) => state.account);

  const isDev = () => process.env.NODE_ENV === "development";

  const PUBLISHABLE_KEY = isDev()
    ? "pk_test_51No2JMEJuy3fXy7Hq57QwIiaRkBMEgfzmtU9fInFW78TPETFaHDDJ1LWG4GMQPFIZhMgdMfYeV6UNsQeibno0D0100YwTE1utg"
    : "pk_live_51No2JMEJuy3fXy7HLm1zNoy4bYSRosCZCPgsgPNF8Xb4HLqwlbRdD9fuiHH1TElHDkDPYjwFJA2MqkdxEZC1LAYj00K6QCgkWd";

  const PRICING_TABLE_ID = isDev()
    ? "prctbl_1NzOUDEJuy3fXy7HowekvrnW"
    : "prctbl_1NuuinEJuy3fXy7Hsvt5TQ93";

  return (
    <DefaultLayout>
      <stripe-pricing-table
        pricing-table-id={PRICING_TABLE_ID}
        publishable-key={PUBLISHABLE_KEY}
        client-reference-id={account.userID}
        customer-email={account.email}
      ></stripe-pricing-table>
    </DefaultLayout>
  );
};
