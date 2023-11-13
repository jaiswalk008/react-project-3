import { useContext } from 'react';
import './ui.css';
import CartContext from '../Store/cart-context';
import CandyListItem from './CandyListItem';
const CandyList = ({candyList}) => {
    const cartCtx = useContext(CartContext);
    const buyCandy =(e) =>{
        const qty = e.target.id;
        const candyId = (e.target.parentElement.id)
        const element = candyList.filter((candy) => +candy.id=== +candyId)[0];
        cartCtx.addItem({...element , qty:qty});
        cartCtx.addTotal(element.price*qty);
    }
    
    return (
        <div className="candy-list">
            <h2>Candy List</h2>
            <ul>
                {candyList.map((element) =>{
                    return <CandyListItem key={element.id} id={element.id} name={element.name} 
                    desc={element.desc} price={element.price} buy={buyCandy}  />
                })}
            </ul>
        </div>
    )
}
export default CandyList;