import React from 'react';
import Banner from './Banner';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
 const [{basket ,user},dispatch]= useStateValue();
 return (
 <div className=" w-full">
  <div className="flex justify-between">
    {/* Left Section (Banner) - 70% */}
    <div className="w-8/10 ">
      <Banner />
    </div>

    {/* Right Section (Subtotal) - 30% */}
    <div className="w-2/10">
      <Subtotal />
    </div>
  </div>
<div class="max-w-4xl  px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-2xl shadow-md mt-10">
  <h3 class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
    Hello, <span class="text-blue-600 break-words">{user.email}</span>
  </h3>
  <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
    Your Shopping Basket
  </h2>
</div>



<div className="w-4/10 border-gray-500">
    {basket.map((item, index) =>(<CheckoutProduct
    id ={item.id}
    title={item.title}
    price={item.price}
    rating={item.rating}
    image={item.image}  
    index={index}
    />))}
</div>

</div>

);

}

export default Checkout;
