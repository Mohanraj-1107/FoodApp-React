import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import {Cart} from "./Cart";
import { Feedback } from "./Feedback";
import Home from "./Home";
import { useState } from "react";
function Index({cart,setCart})
{
    return(
        <div className="container">
            <BrowserRouter>
            <NavBar/>
            <div className="bodyContent">
             <Routes>
                <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
                <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>}/>
                <Route path="/Feedback" element={<Feedback/>}/>
             </Routes>
            </div>
            </BrowserRouter>
        </div>
    )
}
export default Index;