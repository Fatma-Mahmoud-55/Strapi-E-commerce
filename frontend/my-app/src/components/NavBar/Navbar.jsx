import React, { useState } from 'react';
import "./Navbar.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Cart } from './../Cart/Cart';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const [open,setOpen]=useState(false)
    const products = useSelector(state=>state.cart.products)
    return (
    <>
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                <img src="/images/en.png" alt=''/>
                <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className='link' to="/products/1">Woman</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/2">Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/3">Kids</Link>
                </div>
            </div>
            <div className="center">
                <Link className='link' to="/">Fatma</Link>
            </div>

            <div className="right">
                    <div className="item">
                    <Link className='link' to="/products/1">About</Link>
                </div>
                    <div className="item">
                    <Link className='link' to="/products/1">Contact</Link>
                </div>
                    <div className="item">
                    <Link className='link' to="/products/1">Stories</Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <div className="cartIcon" onClick={()=>{setOpen(!open)}}>
                        <ShoppingCartOutlinedIcon/>
                        <span>{products.length}</span>
                    </div>

                </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
    
    </>
    )
}
