/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["stripe_key"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	API_ONETHING_ACCOUNTTABLE_ARN
	API_ONETHING_ACCOUNTTABLE_NAME
	API_ONETHING_GRAPHQLAPIIDOUTPUT
	AUTH_ONETHING_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const aws = require("aws-sdk");

const environment = process.env.ENV;
const userPoolId = process.env.AUTH_ONETHING_USERPOOLID;
const apiGraphQLAPIIdOutput = process.env.API_ONETHING_GRAPHQLAPIIDOUTPUT;
const accountTableName = `Account-${apiGraphQLAPIIdOutput}-${environment}`;

// declare a new express app
const app = express();
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      req.rawBody = buf.toString();
    },
  })
);
app.use(awsServerlessExpressMiddleware.eventContext());

const getStripeKey = async () => {
  const { Parameters } = await new aws.SSM()
    .getParameters({
      Names: ["stripe_key"].map((secretName) => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();
  return Parameters[0].Value;
};

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const getCognitoUsername = async (email) => {
  const cognito = new aws.CognitoIdentityServiceProvider({
    apiVersion: "2016-04-18",
  });

  const users = await cognito.listUsers({
    AttributesToGet: ["username"],
    Filter: `email=\"${email}\"`,
    Limit: 1,
    UserPoolId: userPoolId,
  });

  console.log(users);

  return ({ username } = users[0]);
};

const updateUserAccount = async ({ email, plan, planStatus }) => {
  const username = await getCognitoUsername(email);

  const params = {
    TableName: accountTableName,
    Key: {
      userID: username,
    },
    UpdateExpression: "set planStatus = :planStatus, plan = :plan",
    ExpressionAttributeValues: {
      ":planStatus": planStatus,
      ":plan": plan,
    },
    ReturnValues: "ALL_NEW",
  };

  const docClient = new AWS.DynamoDB.DocumentClient();

  try {
    const data = await docClient.update(params).promise();
    return { body: JSON.stringify(data) };
  } catch (err) {
    return { error: err };
  }
};

app.post("/webhook/stripe", async function (req, res) {
  const stripeKey = await getStripeKey();
  const stripe = require("stripe")(stripeKey);
  const customer = await stripe.customers.retrieve(
    req.body.data.object.customer
  );
  const email = customer.email;

  // TODO: capture plan and plan status

  const result = await updateUserAccount(email, "ONE", "VALID");
  console.log(result);

  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
