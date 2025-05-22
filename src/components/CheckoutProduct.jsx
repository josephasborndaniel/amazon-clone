import React from 'react';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, index }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      index: index,
    });
  };

  return (
    <div className="flex flex-col  m-4 md:flex-row mb-5 bg-gray-50 border border-gray-300 rounded-lg p-4 items-center justify-center">
      <img className="object-contain w-full md:w-44 h-44 rounded-md" src={image} alt={title} />

      <div className="pl-0 md:pl-5 mt-4 md:mt-0 text-center md:text-left flex-1">
        <p className="text-lg font-bold">{title}</p>
        <p className="mt-1">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="flex justify-center md:justify-start mt-2 space-x-1 text-yellow-500">
          {Array(rating).fill().map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        </div>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
          onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
