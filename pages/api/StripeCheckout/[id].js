import Stripe from "stripe";
const stripe = new Stripe(process.env.SK_STRIPE);
const index = async (req, res) => {
  const id = req.query.id;
  try {
    if (!id.startsWith("cs_")) {
      throw new Error("Incorect Id");
    }
    const checkoutSesoin = await stripe.checkout.sessions.retrieve(id);
    res.status(200).json({ checkoutSesoin: checkoutSesoin });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};
