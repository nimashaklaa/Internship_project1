import React from "react";
import './Navbar.css';

export const Navbar=()=>{
    return(
        <nav className = "container-fluid text-center">
            <div className ="row navbar-row " >
                <div className ="col-1"><a href='/shop' >Shop</a></div>
                <div className ="col-1"><a href ='/Contact' >Contact</a></div>
                <div className ="col-8"><a href ='' ></a></div>
                <div className ="col-1"><a href ='/Sign In' >Sign In</a></div>
                <div className ="col-1"><a href ='/Cart' >Cart</a></div>
              
            </div>

        </nav>
    )

}

