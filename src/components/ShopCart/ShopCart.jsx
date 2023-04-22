import React from 'react';
import Shop from '../shop/Shop';
import "./ShopCart.css";

//Tostifay
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

///redux
import {useSelector,useDispatch} from "react-redux";

import { checkoutItem,cleareItem } from '../../Redux/shopping/ShoppingAction';
import { Link } from 'react-router-dom';

const ShopCart = () => {
    const state=useSelector(state=>state.cartdState)
    const dispatch=useDispatch()

    const checkou=()=>{
        dispatch(checkoutItem(state))
        toast.success("Ckeckout successful")
    }

    const cleare=()=>{
        dispatch(cleareItem(state))
        toast.warning("Cleared")
    }

    return (
        <div className='shopcart'>
            {state.selectedItems.map((item)=>(
                <Shop key={item.id} {...item}/>
            ))}
           
           <div className='fainal'>
                {
                    state.itemsCounter > 0 && <div className='reen'>
                        <span>Total Items: {state.itemsCounter}</span>
                        <span>Total Payments: {state.total} $</span>
                        <div className='button'> 
                            <button onClick={checkou}>CKECKOUT</button>
                            <button onClick={cleare}>CLEARE</button>
                        </div>
                 </div>
                } 
                {
                    state.checkout && <div className='ckeck'>
                        <h3>CheckOut successful</h3>
                        <Link to={"/"}>Buy More?</Link>
                    </div>
                }
                {
                    !state.checkout && state.itemsCounter==0 && <div className='cleare'> 
                        <h3>Whant To Buy?</h3>
                        <Link to={"/"}>Go To Shop</Link>
                    </div>
                }
            </div>
                <ToastContainer />
        </div>
    );
};

export default ShopCart;