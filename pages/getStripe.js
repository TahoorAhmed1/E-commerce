import { loadStripe } from "@stripe/stripe-js";
let stripePromise = null;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_SPUBLISH_KEY);
  }
  return stripePromise;
};
export default getStripe;
