import React from 'react';
import "./Home.css";
import Products from "./Products.json";
import {useState} from "react";

function ProductCart({product,cart,setCart})
{ 
  function addCart()
  {
      setCart([...cart,product]);
  }
  function removeCart()
  {
    setCart(cart.filter((item)=>item.id!==product.id))
  }
  const qt=[1,2,3,4,5,6,7,8,9,10];
  return (
  <div className="products-container">
  <div className="images">
    <img src={product.imageUrl} alt={product.name} />
  </div>
  <h5>{product.name}</h5>
  <div className="details">
    <h5>Price : {product.price}RS</h5>
    <label htmlFor="qty">Qty:</label>
     <select name="qty" id="qty">
      {qt.map((qt)=>(
        <option key={qt} value={qt}>{qt}</option>
      ))}
     </select>
    <br />
    {cart.includes(product)?<button onClick={removeCart} style={{backgroundColor:"orangered"}}>Remove cart</button>
    :<button onClick={addCart}>Add to cart</button>}
  </div> 
</div>
  )
}
function Home({cart,setCart}){
  return (
    <div className="home">
        {Products.map((product)=>(
          <ProductCart product={product} key={product.id} cart={cart} setCart={setCart}/>
        ))}
    </div>
  )
}
export default Home;
