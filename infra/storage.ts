// Create an S3 bucket
// An S3 bucket is a fundamental unit within Amazon S3,
// AWS's object storage service. It acts as a container
// for storing objects, which can be any type of data, such as
// files, images, or even entire websites

// We're using this bucket later to handle file uploads
export const bucket = new sst.aws.Bucket("Uploads");

// Create the DynamoDB table

// Our database is not exposed publicly and is only invoked by our Lambda functions.
// But our users will be uploading files directly to the S3 bucket that we created.
export const table = new sst.aws.Dynamo("Notes", {
  fields: {
    userId: "string",
    noteId: "string",
  },
  // The primary key uniquely identifies each item in the table,
  // so that no two items can have the same key
  primaryIndex: { hashKey: "userId", rangeKey: "noteId" },
});

// Create a secret for Stripe
export const secret = new sst.Secret("StripeSecretKey");
