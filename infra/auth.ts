import { api } from "./api";
import { bucket } from "./storage";

const region = aws.getRegionOutput().name;

// Manages user signups and logins
// We want users to be able to sign up with their email address
export const userPool = new sst.aws.CognitoUserPool("UserPool", {
  usernames: ["email"],
});

// Only one since we only are using a web client
export const userPoolClient = userPool.addClient("UserPoolClient");

// Manages which resources a user can access
export const identityPool = new sst.aws.CognitoIdentityPool("IdentityPool", {
  userPools: [
    {
      userPool: userPool.id,
      client: userPoolClient.id,
    },
  ],
  permissions: {
    authenticated: [
      // IAM policy to allow autheniticated user to access the S3 bucket
      {
        actions: ["s3:*"],
        resources: [
          $concat(
            bucket.arn,
            "/private/${cognito-identity.amazonaws.com:sub}/*"
          ),
        ],
      },
      // IAM policy to allow autheniticated user to access the API
      {
        actions: ["execute-api:*"],
        resources: [
          $concat(
            "arn:aws:execute-api:",
            region,
            ":",
            aws.getCallerIdentityOutput({}).accountId,
            ":",
            api.nodes.api.id,
            "/*/*/*"
          ),
        ],
      },
    ],
  },
});
