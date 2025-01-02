import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your_publishable_key_here');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const cardElement = elements.getElement(CardElement);

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setMessage(error.message);
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('/api/payment', {
                amount: 5000, // Amount in the smallest unit of the currency (e.g., cents for USD)
                currency: 'usd',
                paymentMethodId: paymentMethod.id,
            });

            if (response.data.success) {
                setMessage('Payment successful!');
            } else {
                setMessage('Payment failed!');
            }
        } catch (error) {
            setMessage(error.response.data.error);
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Pay $50'}
            </button>
            {message && <div>{message}</div>}
        </form>
    );
};

const App = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default App;
