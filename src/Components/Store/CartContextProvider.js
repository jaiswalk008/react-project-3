import { useState } from "react"
import CartContext from "./cart-context"
const CartContextProvider = (props) =>{
    const [items, setItems] = useState([]);
    const [total , setTotal] = useState(0);
    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };
    const addTotal = (price) => setTotal(total + +price);
    const cartContext={
        items:items,
        total:total,
        addTotal:addTotal,
        addItem:addItem
    }
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}
export default CartContextProvider;