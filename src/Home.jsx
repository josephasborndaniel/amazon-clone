import React from 'react'
import './App.css'
import Product from './components/Product'
import Banner from './components/Banner'



function Home() {
  return (
    <div className="home">
        <Banner/>
        <div className="flex flex-wrap  gap-5 ">
          <Product title="new product"
          price={29.99}
          rating={4}
          image={"https://ideabuddy.com/wp-content/uploads/2020/06/lean-startup-methodology-1.jpg"}
          />
          <Product
           image={"https://ideabuddy.com/wp-content/uploads/2020/06/lean-startup-methodology-1.jpg"} />
          <Product  image={"https://ideabuddy.com/wp-content/uploads/2020/06/lean-startup-methodology-1.jpg"}/>
          <Product
           image={"https://ideabuddy.com/wp-content/uploads/2020/06/lean-startup-methodology-1.jpg"} />
          <Product  image={"https://ideabuddy.com/wp-content/uploads/2020/06/lean-startup-methodology-1.jpg"}/>
          <Product  image={"https://ideabuddy.com/wp-content/uploads/2020/06/lean-startup-methodology-1.jpg"}/>
        </div>

      </div>
    
  )
}

export default Home
