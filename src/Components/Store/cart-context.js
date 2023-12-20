import React from "react"
const CartContext =
    React.createContext({
       items:[],
       addItem:(item) => {},
       total:0,
       addTotal:(price) => {},
       totalItems:0,
       setTotalItems:() =>{},
    });
export default CartContext;