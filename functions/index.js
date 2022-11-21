const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.static('public'));

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const YOUR_DOMAIN = 'https://wanderlustcafe.web.app';

app.use(cors({
    origin: ['https://wanderlustcafe.web.app', 'https://checkout.stripe.com'],
    // credentials: true,
}));

app.get('/test', (req, res) => {
    res.json({ myResponse: 'Hello from the API !!!!!!!!!' });
});

app.post('/checkout_session', async (req, res) => {
    const orderedItems = [];
    for (const [id, count] of Object.entries(req.body.orderDetails)) {
        orderedItems.push({ price: id, quantity: count });
    }
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: orderedItems,
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}?success=true`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        });
        res.json({ status: 'success', url: session.url });
    } catch (e) {
        res.json({ status: 'fail', error: e });
    }
});

exports.api = functions.https.onRequest(app);
