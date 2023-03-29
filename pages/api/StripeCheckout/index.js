import Stripe from "stripe";
const stripe = new Stripe(process.env.SK_STRIPE);
const index = async (req, res) => {
  if (req.method == "POST") {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: req.body.name,
              size: req.body.size,
              color: req.body.color,
              qty: req.body.qty,
              amount: req.body.amount,
            },
          },
        },
      ],
      mode: "payment",
      success_url: `${process.env.HOST}/checkoutSuccess`,
      cancel_url: `${process.env.HOST}/checkoutCancel`,
    });

    res.send({ url: session.url });
  }
};

export default index;
