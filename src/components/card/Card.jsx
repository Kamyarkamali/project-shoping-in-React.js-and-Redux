import React, { useEffect, useState } from 'react';
import "./Card.css";


///Icons
import {BsBookmarkPlus} from "react-icons/bs";
import {BsBookmarkX} from "react-icons/bs";
import {BiMessageAltError} from "react-icons/bi";
import { useDispatch,useSelector } from 'react-redux';
import { BsHandThumbsUpFill } from 'react-icons/bs';
import { BsHandThumbsDownFill } from 'react-icons/bs';
import { CiMenuKebab } from 'react-icons/ci';
import {IoIosHeartEmpty} from "react-icons/io";
import {IoIosHeart} from "react-icons/io";
import { BiDollar } from 'react-icons/bi';
import { BsFillTrashFill } from 'react-icons/bs';

//Alarm
import Alart from '../Alart/Alart';

import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

//Redux
import { addItem,inceriseItem,decriseItem,removeItem} from '../../Redux/shopping/ShoppingAction';

//Helpers
import {shortenTitle,isCart,cartQuantity} from "../helpers/helper";

const Card = ({data}) => {
    const state=useSelector(state=>state.cartdState)
    const [saved,setSaved]=useState(false);
    const [hearte,seHearte]=useState(false);
    const [menu,setMenu]=useState(false);
    const {image,category,id,price,title}=data;


    const clickSaved=()=>{
        setSaved(!saved)
    }

    const heartHandeler=()=>{
        seHearte(!hearte)
    }

    const clickMenu=()=>{
        setMenu(!menu)
    }

    const scroll= useEffect(()=>{
        AOS.init({duration:800})
        setTimeout(()=>{
        },3000)
    },[])

    
    const dispatch=useDispatch()

    
    
    return (
        <div>

        <div className='cardcontainer'data-aos="fade-right" {...scroll}>
            <div className='hearte' onClick={heartHandeler}>
                {!hearte ? <IoIosHeartEmpty/> :<IoIosHeart className='love'/>}
             </div>
             <p className='menu' onClick={clickMenu}><CiMenuKebab/>
             {menu?<ul className='ul'>
                <Link to={`/detailse/${id}`}>
                <li>Go To Detailse</li>
                </Link>
                <Link to={"/shopcart"}>
                <li>Shopping</li>
                </Link>
                <li>Shared</li>
             </ul> :null}
             </p> 
             
             

            <Link to={`/detailse/${id}`}>
            <div className='card'>
            <img src={image} alt={title}/> 
            </div>
            </Link>
            <div className='title'>
            <h4>{shortenTitle(title)}</h4>
            </div>
            <div className='price'>
            <BiDollar/>
            <span>{price}</span>
            </div>
            
            <div className='saved' onClick={clickSaved}>
                {!saved ? <BsBookmarkPlus className='saveicon'/> : <BsBookmarkX className='corseeicon'/>}
            </div>
            <div className='btn'>

            {
                isCart(state,data.id) ? <button onClick={()=>dispatch(inceriseItem(data))}>+</button> : <button onClick={()=>dispatch(addItem(data))}>Add To Shopp</button>
            }
            {
                cartQuantity(state,id) >1 && <button onClick={()=>dispatch(decriseItem(data))}>-</button>
            }
            {
                cartQuantity(state,id)===1 && <button onClick={()=>dispatch(removeItem(data))}><BsFillTrashFill/></button>
            }
            
    
            </div>
                <Link to={`/detailse/${id}`}>
            <div className='detailse'>
                <p>Detailse</p>
                <BiMessageAltError/>
            </div>
                </Link>
                <div className='like'>
                    <BsHandThumbsUpFill className='liked'/>
                    <BsHandThumbsDownFill className='unliked'/>
                </div>
        </div>
                </div>
    );
};

export default Card;