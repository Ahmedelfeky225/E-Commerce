import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { bagSelector } from "../app/features/bag/bagSlice";

// Stripe public key
const stripePromise = loadStripe(
  "pk_test_51RCHVXQeQnCmvzHrw8QL0wJROJLRWmDJdSPjY909SRdGjDCNjju4QxIBmRkOIdNM9fAFcsi0ZNVOz1XDjlcbx0Wu00qxt87xk8"
);

const CheckoutFormPage = () => {
  const { bagItems } = useSelector(bagSelector);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1REq46QeQnCmvzHr6qlO0hl8",
          quantity: bagItems.length || 1,
        },
      ],
      mode: "payment",
      successUrl: "http://localhost:5173/success",
      cancelUrl: "http://localhost:5173/cancel",
    });

    if (error) {
      console.error("Error redirecting to Checkout:", error.message);
    }
  };

  return (
    <div className="w-full max-w-md p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-semibold mb-4">Checkout</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        onChange={handleInput}
        className="w-full border px-2 py-1 mb-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInput}
        className="w-full border px-2 py-1 mb-2"
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleInput}
        className="w-full border px-2 py-1 mb-4"
      />

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
