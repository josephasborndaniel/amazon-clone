import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Payment() {
  const [{ basket, user }] = useStateValue();

  const totalAmount = basket.reduce((amount, item) => amount + item.price, 0) * 100; // amount in paise

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };

  React.useEffect(() => {
    loadRazorpay();
  }, []);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_YourKeyHere", // TODO: Replace with your Razorpay Test Key from Dashboard
      amount: totalAmount,
      currency: "INR",
      name: "Demo Project Store",
      description: "Demo Payment",
      notes: {
        website: window.location.hostname, // Track website for multiple sites using same account
      },
      handler: function (response) {
        alert("Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: user ? user.email : "Test User",
        email: user ? user.email : "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

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
          <div className="w-3/4 text-gray-700 flex items-center space-x-4">
            <span className="text-lg font-semibold">
              Total: ₹{(totalAmount / 100).toFixed(2)}
            </span>
            <button
              onClick={handlePayment}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Pay Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Payment;
