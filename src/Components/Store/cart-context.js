import React from "react"
const CartContext =
    React.createContext({
       items:[],
       addItem:(item) => {},
       total:0,
       addTotal:(price) => {},
    });
export default CartContext;