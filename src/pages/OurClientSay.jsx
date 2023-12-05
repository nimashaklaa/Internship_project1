import React from "react";
import {Button} from '../components/button';
import './OurClientSay.css';

export const OurClientSay=()=>{
    return(
        <div className="ourClient-content">
            <div className="text-content">
                <div className="overline-heading">
                    <div className="google">
                        <img className="google-logo" alt="google-logo" src="google-logo.svg"/>
                        <div className="reviews">REVIEWS</div>
                    </div>
                    <div className="ourclient">Our Clients say</div>
                </div>
                <div className="slider">
                    <div className="mask">
                        <img className="arrow1" alt="Left-arrow" src="left-arrow.svg"/>
                        <div className="slide">
                            <p className="ordered-flowers">
                                <span className="span">“</span>
                                <span className="text-wrapper-para">Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!</span>
                                <span className="span">”</span>
                            </p>
                            <div className="text-wrapper-rona">– Ronald Richards</div>
                        </div>
                        <img className="arrow1" alt="Right arrow" src="right-arrow.svg"/>
                    </div>
                    <div className="slide-nav">
                        <div className="ellipse"/>
                        <div className="ellipse-2"/>
                        <div className="ellipse-2"/>
                        <div className="ellipse-2"/>
                    
                    </div>

                </div>
                <Button className="button-instance" label="READ REVIEWS" size="dekstop-tablet" state="pressed" type="secondary"/>
            </div>
            

        </div>
    )
}