import { createContext } from "react";
import { ParentContext } from "./ParentContext";
import "./use.css";
export const Component=createContext();
function UseContext(){
  const data="helloo from grandparent";
  return (
    <div className="box">
        <h3>GrandParent element</h3>
        <Component.Provider value={data}>
            <ParentContext/>
        </Component.Provider>
    </div>
  )
}
export default UseContext;
