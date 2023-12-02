import React from "react";
import './Navbar.css';

export const Navbar=()=>{
    return(
        <nav className = "container text-center">
            <div className ="row ">
                <div className ="col-1"><a href ='#' >Shop</a></div>
                <div className ="col-1"><a href ='#' >Contact</a></div>
                <div className ="col-8"><a href ='#' ></a></div>
                <div className ="col-1"><a href ='#' >Sign In</a></div>
                <div className ="col-1"><a href ='#' >Cart</a></div>
            </div>

        </nav>
    )

}

