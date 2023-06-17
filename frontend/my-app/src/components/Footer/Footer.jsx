import React from 'react'
import "./Footer.scss"

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="top">
                    <div className="item">
                        <h1>Categories</h1>
                        <span>Women</span>
                        <span>Men</span>
                        <span>Kids</span>
                        <span>Shoes</span>
                        <span>Accessories</span>
                        <span>New Arrivals</span>
                    </div>
                    <div className="item">
                        <h1>Links</h1>
                        <span>FAQ</span>
                        <span>Pages</span>
                        <span>Stores</span>
                        <span>Compare</span>
                        <span>Cookies</span>
                    </div>
                    <div className="item">
                        <h1>About</h1>
                        <span>Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. Laudantium eaque ex,
                            quisquam aperiam ab officia ipsa itaque doloremque 
                            labore vero minima perspiciatis quae blanditiis autem, 
                            alias tempore deserunt, et nobis.
                            </span>
                    </div>
                    <div className="item">
                        <h1>Contact</h1>
                        <span>Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. Laudantium eaque ex,
                            quisquam aperiam ab officia ipsa itaque doloremque 
                            labore vero minima perspiciatis quae blanditiis autem, 
                            alias tempore deserunt, et nobis.
                            </span>
                    </div>
                </div>
                <div className="buttom">
                    <div className="left">
                        <span className="logo">Fatma Store</span>
                        <span className="copyright">© Copyright 2023, All Rights Reserved</span>

                    </div>
                    <div className="right">
                        <img src='/images/payment.png' alt=''/>
                    </div>

                </div>
            </div>


        </>
    )
}
