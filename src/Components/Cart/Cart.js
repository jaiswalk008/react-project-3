import { useContext, useState } from 'react';
import {createPortal} from 'react-dom';
import './Cart.css'
import CartModal from './CartModal';
import CartContext from '../Store/cart-context';

const Cart = (props) => {
    const [showModal  , setShowModal] = useState(false);
    const cartCtx = useContext(CartContext);
    const modalHandler = () =>{
        setShowModal(!showModal);
    }
    
    return (
        <div className='w-100'>
            <button className="btn cart-button btn-dark" onClick={modalHandler}>
                🛒 Your Cart <span className="cart-value">{cartCtx.items.length}</span></button>
            {showModal && createPortal(<CartModal click={modalHandler} /> , document.getElementById('modal-area'))}
        </div>
    );
}
export default Cart;