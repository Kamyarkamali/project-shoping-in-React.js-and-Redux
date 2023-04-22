import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import fetchUsers from '../Redux/cart/CartActions';
import Card from './card/Card';
import "./Cards.css";
import Loader from './Loader/Loader';



const Carts = () => {
    const dispacth=useDispatch()
    const data=useSelector(state=>state.reducerr)
    const state=useSelector(state=>state.cartdState)
    
    useEffect(()=>{
       if(!data.users.length) dispacth(fetchUsers())

    },[data.users.length, dispacth])

    return (
        <div className='cardscontainer'>  
        
            {
                data.loading ? <Loader/>:
                data.error ? <h1>error</h1>:
                data.users.map((item,index)=>(
                    <Card key={index} data={item}/>
                ))
            }
            <div>
            </div>
        </div>
    );
};

export default Carts;