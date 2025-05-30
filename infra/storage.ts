// Create an S3 bucket
// An S3 bucket is a fundamental unit within Amazon S3,
// AWS's object storage service. It acts as a container
// for storing objects, which can be any type of data, such as
// files, images, or even entire websites

// We're using this bucket later to handle file uploads
export const bucket = new sst.aws.Bucket("Uploads");
