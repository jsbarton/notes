import Stripe from "stripe";
import { Resource } from "sst";
import { Util } from "@notes/core/util";
import { Billing } from "@notes/core/billing";

export const main = Util.handler(async (event) => {
  // storage = # of notes user wants to store, source = stripe token for card we're going to charge
  const { storage, source } = JSON.parse(event.body || "{}");
  // compute the amount to charge based on the number of notes the user wants to store
  const amount = Billing.compute(storage);
  const description = "Scratch charge";

  const stripe = new Stripe(
    // Load our secret key
    Resource.StripeSecretKey.value,
    { apiVersion: "2025-05-28.basil" }
  );

  await stripe.charges.create({
    source,
    amount,
    description,
    currency: "usd",
  });

  return JSON.stringify({ status: true });
});
