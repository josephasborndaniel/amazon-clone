import React from 'react';
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{ basket }] = useStateValue();

  const totalPrice = basket.reduce((amount, item) => item.price + amount, 0);
  const itemCount = basket.length;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[300px] sm:max-w-[400px] h-[300px] p-4 bg-[#f3f3f3] border border-[#dddddd] rounded mx-auto">
      <div>
        <p className="text-base sm:text-lg">
          Subtotal ({itemCount} items): <strong>${totalPrice.toFixed(2)}</strong>
        </p>
        <small className="flex items-center mt-2 text-sm">
          <input type="checkbox" className="mr-2" />
          This order contains a gift
        </small>
      </div>

      <button className="bg-[#f0c14b] rounded w-full  border border-[#a88734] mt-4 text-[#111] font-medium hover:bg-yellow-400 transition">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
