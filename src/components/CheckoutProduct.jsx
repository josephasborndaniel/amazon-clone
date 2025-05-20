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
    <div className="flex mb-5">
      <img className="object-contain w-44 h-44" src={image} alt={title} />

      <div className="pl-5">
        <p className="text-lg font-bold">{title}</p>
        <p className="mt-1">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex mt-2 space-x-1 text-yellow-500">
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
