import React from 'react'
import {useStateValue} from './StateProvider'

function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();

  console.log("this is the basket", basket)
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg p-4 max-w-xs mx-auto mt-6">
  <img
    src={image}
    alt="The Lean Startup"
    className="w-full h-48 object-cover rounded"
  />

  <div className="mt-4">
    <p className="text-lg font-semibold text-gray-800">{title}</p>
    <p className="text-gray-600 mt-1">
      <small>$</small>
      <strong>{price}</strong>
    </p>
    <div className="flex mt-2 space-x-1 text-yellow-500">
{Array(rating).fill().map((_, i) =>(<span key={i}>⭐️</span>))}
    </div>
  </div>

  <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
    onClick={addToBasket}
  >
    Add to Cart
  </button>
</div>

  )
}

export default Product
