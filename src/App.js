import Index from "./FoodApp/Index";
import {useState} from "react";
function App() {
  const [cart,setCart]=useState([]);
  return (
    <div className="App">
            <Index cart={cart} setCart={setCart}/>
    </div>
  );
}

export default App;
