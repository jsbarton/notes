const config = {
  // Frontend config
  STRIPE_KEY:
    "pk_test_51RVuvQBNE3BHedBqCGoMI1lnd3JAMbbnzsbLZ1keEcFuuC2rGvOiFpE2sblpAkZKKPGO0w6og0sA1TjbE0gZYfVA00f7eKdd5v",
  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  // Environment variables from serverless backend
  s3: {
    REGION: import.meta.env.VITE_REGION,
    BUCKET: import.meta.env.VITE_BUCKET,
  },
  apiGateway: {
    REGION: import.meta.env.VITE_REGION,
    URL: import.meta.env.VITE_API_URL,
  },
  cognito: {
    REGION: import.meta.env.VITE_REGION,
    USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
    APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
  },
};

export default config;
