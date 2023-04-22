import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

import "./Shop.css";

//helpers
import {shortenTitle,cartQuantity} from "../helpers/helper";

//redux
import {useSelector,useDispatch} from "react-redux";
import { removeItem,decriseItem,inceriseItem } from '../../Redux/shopping/ShoppingAction';

const Shop = (props) => {
    console.log(props);
    const state=useSelector(state=>state.cartdState)
    const dispatch=useDispatch()
    const {image,price,quantity,title,id}=props;
    return (
        <div className='shopContainer'> 
            <div className='image'>
                <img className='imagess' src={image} alt={title}/>
                <span>{shortenTitle(title)}</span>
                <div className='priceqouantity'>
                <p>{quantity}</p>
                <h4 className='price'>{price} $</h4>
                </div>
                <div className='btnshop'>
            {
                    cartQuantity(state,id) > 1 ? <button onClick={()=>dispatch(decriseItem(props))}>-</button> : <button onClick={()=>dispatch(removeItem(props))}><BsFillTrashFill/></button>
            }
            <button onClick={()=>dispatch(inceriseItem(props))}>+</button>
            </div>



            
            </div>
           
        </div>
    );
};

export default Shop;