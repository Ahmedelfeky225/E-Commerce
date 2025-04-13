import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RCHVKHsT8MJYpBC9xcMjRQu6B7qFJFpSqBGO4BSTCJAZRg0tJqy55vuYimGfI4m5BHNf3KW7XhLUuJrufQoXtsF00LtNSYdvR"
);

const CheckoutFormPage = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // توجيه المستخدم لصفحة Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1RCK6DHsT8MJYpBCLgZLaR98", // استبدل price_xxx بالـ Price ID بتاع المنتج من Stripe Dashboard
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "http://localhost:3000/success", // رابط النجاح (هتغيره لما ترفع المشروع)
      cancelUrl: "http://localhost:3000/cancel", // رابط الإلغاء (هتغيره لما ترفع المشروع)
    });

    if (error) {
      console.error("Error redirecting to Checkout:", error.message);
    }
  };

  return (
    <div className="w-full max-w-md p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-semibold mb-4">Checkout</h2>
      <button
        onClick={handleCheckout}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Pay with Stripe Checkout
      </button>
    </div>
  );
};

export default CheckoutFormPage;
