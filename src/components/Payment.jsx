import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Payment() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-xl space-y-8">

        {/* Delivery Address */}
        <div className="flex space-x-6 border-b pb-4">
          <div className="w-1/4">
            <h3 className="text-lg font-semibold">Delivery Address</h3>
          </div>
          <div className="w-3/4 text-gray-700">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Review Items */}
        <div className="flex space-x-6 border-b pb-4">
          <div className="w-1/4">
            <h3 className="text-lg font-semibold">Review Items</h3>
          </div>
          <div className="w-3/4 space-y-4">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex space-x-6">
          <div className="w-1/4">
            <h3 className="text-lg font-semibold">Payment Method</h3>
          </div>
          <div className="w-3/4 text-gray-700">
            {/* Future implementation: Add payment form or method here */}
            <p className="text-sm italic text-gray-500">Payment method section coming soon...</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Payment;
