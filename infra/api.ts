import { bucket } from "./storage";

export const api = new sst.aws.ApiGatewayV2("Api");

// When this API is invoked, ths function called handler in
// /packages/functions/src/api.ts will be executed.
api.route("GET /", {
  link: [bucket],
  handler: "packages/functions/src/api.handler",
});
