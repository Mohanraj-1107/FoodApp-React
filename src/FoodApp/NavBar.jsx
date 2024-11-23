import React from 'react'
import {Link} from "react-router-dom";
import "./NavBar.css";
 function NavBar(){
  return (
    <div className='navigation'>
       <h4>Food App</h4>
       <ul>
        <li><Link to={"/"}>Home</Link></li> 
        <li><Link to={"/cart"}>View Cart</Link></li> 
        <li><Link to={"/Feedback"}>Feedback</Link></li> 
       </ul>
    </div>
  )
}
export default NavBar;