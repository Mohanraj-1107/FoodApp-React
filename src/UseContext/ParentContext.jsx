import { createContext, useContext } from "react";
import { ChildContext } from "./ChildContext";
import { Component } from "./UseContext";
export const ParentContext = () => {
    const value=useContext(Component);
  return (
    <div className="box">
    <div>ParentContext</div>
    <h5>{value}</h5>
    <ChildContext/>
    </div>
  )
}
