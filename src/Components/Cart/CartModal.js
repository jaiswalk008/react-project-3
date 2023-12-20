import './Cart.css'
import React,  { useContext } from 'react';
import CartContext from '../Store/cart-context';
const CartModal = (props) =>{
    const ctx  = useContext(CartContext);
    
    return (
        <div className="modal">
            <div className="modal-content">
                {ctx.items.map((element,index) => {
                    {console.log(element._id)}
                    return (
                        <div key={element._id}>
                            <div className='d-flex justify-content-between' >
                                <div>
                                    <span>{element.name} -  {element.desc} x{element.qty}</span>
                                    <strong className='ms-5' style={{color: 'rgb(154, 56, 56)'}}>Rs. {element.price*element.qty}</strong>    
                                </div>
                                

                            </div>
                            <hr></hr>
                        </div>
                   
                    )
                })}
               
                <div className='fs-4 mt-2'>
                    <strong>Total amount</strong>
                    <strong className='float-end'>Rs. {ctx.total}</strong>
                </div>
                <div className='d-flex justify-content-end mt-3'>
                    <button onClick={props.click} className="btn close me-2 ">Close</button>
                    <button className="btn order">Order</button>
                </div>
            </div>
        </div>
    )
}
export default CartModal;