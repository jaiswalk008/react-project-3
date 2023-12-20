import { useContext } from 'react';
import './ui.css';
import CartContext from '../Store/cart-context';
import CandyListItem from './CandyListItem';
import axios from 'axios';

const CandyList = ({candyList}) => {
    const cartCtx = useContext(CartContext);
    const buyCandy =async (e) =>{
        const qty = e.target.id;
        
        const candyId = (e.target.parentElement.id);
        let candy;
        let itemAlreadyInCart = false;
        cartCtx.items.forEach((element) =>{
            if(element.id==candyId){
                element.qty  = +element.qty + +qty;
                candy={...element};
                itemAlreadyInCart=true;
            }
        })
        
        

        if(itemAlreadyInCart){
           
            const { _id, ...payload } = candy;
           
            try{
                const res = await axios.put(`https://crudcrud.com/api/84094fcb97b44c50a43708f266d80a0a/cart/${_id}`,payload);
                console.log(res.data);
                cartCtx.addTotal(candy.price*qty);
            }
            catch(err){console.log(err);}
        }else{
            try{
                candy = candyList.filter((element) => element._id==candyId)[0];
                // console.log(candy);
                const updatedCandy = {...candy , id:candyId};
                delete updatedCandy._id;

                const res = await axios.post(`https://crudcrud.com/api/84094fcb97b44c50a43708f266d80a0a/cart/`,{...updatedCandy,qty:qty});
                console.log(res.data);
                cartCtx.addItem(res.data);
                     
                cartCtx.addTotal(candy.price*qty);
            }
            catch(err){console.log(err);}
        }


        // const element = candyList.filter((candy) => +candy._id=== +candyId)[0];
   
    }
    
    return (
        <div className="candy-list">
            <h2>Candy List</h2>
            <ul>
                {candyList.map((element) =>{
                    return <CandyListItem key={element._id} id={element._id} name={element.name} 
                    desc={element.desc} price={element.price} buy={buyCandy}  />
                })}
            </ul>
        </div>
    )
}
export default CandyList;