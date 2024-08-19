const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');

const app = express();
const stripe = Stripe('sk_test_51P8jQ5Fu0eJ6Fz1QV1oJoJtPLKJKqmRqjWWrrQgVuBg2h1UVuxea9zRCjb66vhQwk4w9M2WN4h0Buh9MNAyQOoyI00R2DEhum3');

app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
