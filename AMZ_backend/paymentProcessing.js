const Stripe = require('stripe');
const stripe = Stripe('sk_test_51P8jQ5Fu0eJ6Fz1QV1oJoJtPLKJKqmRqjWWrrQgVuBg2h1UVuxea9zRCjb66vhQwk4w9M2WN4h0Buh9MNAyQOoyI00R2DEhum3');

exports.handler = async (event) => {
    const { body } = event;
    const { amount, currency, source } = JSON.parse(body);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ['card'],
            source,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
