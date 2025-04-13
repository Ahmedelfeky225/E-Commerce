import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFormPage from "../components/CheckoutForm"; // تأكد من المسار

const stripePromise = loadStripe(
  "pk_test_51RCHVKHsT8MJYpBC9xcMjRQu6B7qFJFpSqBGO4BSTCJAZRg0tJqy55vuYimGfI4m5BHNf3KW7XhLUuJrufQoXtsF00LtNSYdvR"
);

const PaymentPage = () => {
  const [stripeLoaded, setStripeLoaded] = useState(false);

  useEffect(() => {
    stripePromise
      .then(() => {
        setStripeLoaded(true);
      })
      .catch((error) => {
        console.error("Failed to load Stripe:", error);
      });
  }, []);

  if (!stripeLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Stripe...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Elements stripe={stripePromise}>
        <CheckoutFormPage />
      </Elements>
    </div>
  );
};

export default PaymentPage;
