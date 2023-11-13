import Input from "./Input";
import { useContext, useState } from "react";
import './ui.css'
import CartContext from "../Store/cart-context";

const AddCandy = (props) => {
    const cartCtx = useContext(CartContext);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const nameChangeHandler = (e) => setName(e.target.value);
    const descChangeHandler = (e) => setDesc(e.target.value);
    const priceChangeHandler = (e) => setPrice(e.target.value);
    
    const formSubmitHandler=(e) => {
        e.preventDefault();
        const candyDetails = {
            id:props.length+1,
            name:name,
            desc:desc,
            price:price
        };
        props.onAddCandy(candyDetails)
        localStorage.setItem(candyDetails.id, JSON.stringify(candyDetails))
        
    }
    return (
        <div className="container">
            <form onSubmit={formSubmitHandler}>
                <Input id="name" label="Candy Name" type="text" value={name} 
                onChange={nameChangeHandler} />
                <Input id="desc" label="Description" type="text" value={desc} 
                onChange={descChangeHandler} />
                <Input id="price" label="Price" type="number"  value={price} 
                onChange={priceChangeHandler} />
                <button className="btn btn-dark ms-2" type="submit">Add</button>
            </form>
        </div>
    );
}
export default AddCandy;