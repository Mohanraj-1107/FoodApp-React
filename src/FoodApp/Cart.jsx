import React from 'react'
import Products from "./Products.json"
import {useState,useEffect} from "react";
import "./Cart.css";
export const Cart = ({cart,setCart}) => {
    const [total,setTotal]=useState(0);
    const [count,setCount]=useState(0);
    useEffect(function()
     {
       var total=0;
       for(let i=0;i<cart.length;i++)
       {
          total=total+cart[i].price;
       }
       setTotal(total);
       setCount(cart.length);
     })
  return (
    <div className="cart">
          <h5 style={{marginLeft:"5%"}}>No of items in Cart : {count}</h5>
          {
          cart.map((product)=>(
            <div className="cartContainer">
           <CartElements product={product} cart={cart} setCart={setCart} key={product.id}></CartElements>
           </div>
         )) }
        <h5 style={{marginLeft:"5%"}}>Total : {total.toFixed(2)} RS</h5>
    </div>
  )
}
function CartElements({product,cart,setCart})
{
    function removecart(product)
     {
        setCart(cart.filter((item)=>item.id!==product.id));

     }
    return(
        <>
              <div className='images1'>
                  <img src={product.imageUrl} alt="" />
              </div>
              <div className="cartDetails">
                   <h5>{product.name}</h5>
                   <h5>Price : {product.price.toFixed(2)} RS </h5>
                   <button onClick={()=>removecart(product)}>Remove cart</button>
              </div> 
        </>
    )
}