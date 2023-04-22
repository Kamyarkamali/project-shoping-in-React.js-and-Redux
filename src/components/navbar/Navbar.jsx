import React, { useState } from 'react';
import {BsBagPlus} from "react-icons/bs";
import {CiUser} from "react-icons/ci";
import {GrHomeRounded} from "react-icons/gr";
import {HiMenuAlt4} from "react-icons/hi";
import {HiX} from "react-icons/hi";
import "./Navbar.css";
import { Link } from 'react-router-dom';



///Redux
import {useSelector,useDispatch} from "react-redux"

const Navbar = () => {
    const state=useSelector(state=>state.cartdState)
    const [menu,setMenu]=useState(false)
    const clickHandeler=()=>{
        setMenu(!menu)
    }
    return (
        <div className='navbar'>
            <div className='hamburger' onClick={clickHandeler}>
                    {menu ? <HiX/> : <HiMenuAlt4/>  }
                    {menu ?<ul className='menu-hamburger'>
                        <Link to={"/"}>
                        <li>Home</li>
                        </Link>

                        <Link to={"/shopcart"}>
                        <li>Shpping</li>
                        </Link>
                        
                    </ul> :null}
                    </div>
            <div className='navbar'>
                <h2 className='shop'>Wellcome To Shopping</h2>
                <div className='left'>
                    <a href='#'>SingUp <CiUser/></a>
                </div>
                <div className='home'>
                    <Link to={"/"}>
                <span>Home <GrHomeRounded className='homeicon'/></span>
                    </Link>
                </div>
                <Link to={"/shopcart"}>
                <div className='right'>
                    <h2> Shopping</h2>
                    <BsBagPlus className='iconshop'/>
                </div>
                </Link>
                <div className='counter'><span>{state.itemsCounter}</span></div>
            </div>
        </div>
    );
};

export default Navbar;