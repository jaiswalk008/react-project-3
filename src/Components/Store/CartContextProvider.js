import { useEffect, useState } from "react"
import CartContext from "./cart-context"
import axios from "axios";
const CartContextProvider = (props) =>{
    const [items, setItems] = useState([]);
    const [total , setTotal] = useState(0);
    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };
    const fetchCart = async() =>{
        const res = await axios.get('https://crudcrud.com/api/84094fcb97b44c50a43708f266d80a0a/cart');
        console.log(res.data);
        setItems(res.data);
        const total = res.data.reduce((acc , curr) =>{
          acc= acc+(curr.price*curr.qty);
          console.log(acc);
          return acc;
        },0)
        setTotal(total);
    }
    useEffect(() =>{
        fetchCart();
    },[])
    const addTotal = (price) => setTotal(total + +price);
    const cartContext={
        items:items,
        total:total,
        addTotal:addTotal,
        addItem:addItem,
        
    }
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}
export default CartContextProvider;