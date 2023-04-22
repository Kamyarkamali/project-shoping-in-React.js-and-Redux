import React,{useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import fetchUsers from '../../Redux/cart/CartActions';
import {BiArrowBack} from "react-icons/bi";
import Loader from "../Loader/Loader";
import "./Detailse.css";


const Detailse = () => {
    const dispatch=useDispatch()
    const {id}=useParams()

    useEffect(()=>{
        dispatch(fetchUsers(id))
    },[dispatch,id])

    const productState=useSelector(state=>state.reducerr.users)
    const data=productState[id -1]

    console.log(data);
    const image = data ? data.image : null;
    const title = data ? data.title : null;
    const price = data ? data.price : null;
    const description=data ?data.description:null

   if(!data) return <Loader/>
   
    return (
        <div className='containerdetailse'>
            <Link to={"/"}>
            <div className='arrow'>
            <BiArrowBack/>
            </div>
            </Link>
            <div className='title'>
                <h3>{title}</h3>   
            </div>
            <div className='img'>
            <img src={image} alt={title}/>
            </div>
            <div className='desc'>
            <p>{description}</p>
            </div>
            <div className='pricede'>
                <span>{price} $</span>
            </div>
        </div>
    );
};

export default Detailse;