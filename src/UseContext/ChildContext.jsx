import { Component } from "./UseContext";
import {useContext} from "react";
export const ChildContext = () => {
   const value=useContext(Component);
  return (
    <div className="box">
        ChildContext
        <p>{value}</p>
        </div>
  )
}
