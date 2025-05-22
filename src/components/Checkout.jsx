import React from 'react';
import Banner from './Banner';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
 const [{basket},dispatch]= useStateValue();
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

<div className="w-4/10 border-gray-500">
    {basket.map((item, index) =>(<CheckoutProduct
    key={item.id}
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
