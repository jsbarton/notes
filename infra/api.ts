import { table } from "./storage";

// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {
  // tells the API we want the given props to be applied to all routes in the API
  transform: {
    route: {
      handler: {
        // linking API to the DynamoDB table
        link: [table],
      },
      args: {
        auth: { iam: true },
      },
    },
  },
});

// Define the API routes
api.route("POST /notes", "packages/functions/src/create.main");
api.route("GET /notes/{id}", "packages/functions/src/get.main");
api.route("GET /notes", "packages/functions/src/list.main");
api.route("PUT /notes/{id}", "packages/functions/src/update.main");
api.route("DELETE /notes/{id}", "packages/functions/src/delete.main");
