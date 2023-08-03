import getRawBody from "raw-body"
import stripe from 'src/pricing/utils/stripe'

export default async function handler(req, res) {
    const signature = req.headers['stripe-signature']
    const signingSecret = process.env.STRIPE_SIGNING_SECRET
    const rawBody = await getRawBody(req)

    let event;

    try {
        stripe.webhooks.constructEvent(rawBody, signature, signingSecret)
    } catch (err) {
        console.log("Webhook signature verification failed")
        return res.status(400).end()
    }

    console.log(event)

    res.send({ success: true })
}
