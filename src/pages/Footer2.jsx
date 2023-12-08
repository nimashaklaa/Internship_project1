import React from "react";
import './Footer2.css';
import { InputText } from "../components/InputText";
import { Button } from "../components/button";

export const Footer2 =()=>{
    return(
        <div className="footer">
            <div className="row">
                <div className="col-md-3">
                    <p className="div-para">
                        Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address
                    </p>
                    <div className="form-block">
                        <InputText
                            className="input-text-instance"
                            placeholder="Your Email"
                            showLabel={false}
                            size="desktop"
                            state="default"
                        />
                        <Button className="button-instance" label={"REMIND"} state="default" type="primary" padding={"10px 75px"} BackgroundColor={"black"} border={"1px solid white"} color={"white"}/>   
                        

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-wrapper-2">Contact Us</div>
                        <div className="wrap-links">
                            <div className="text-wrapper-3">Address</div>
                            <div className="text-wrapper-4">15/4 Khreshchatyk Street ,Kyiv</div>
                        </div>
                        <div className="wrap-links">
                            <div className="text-wrapper-3">Phone</div>
                            <div className="text-wrapper-4">+380980099777</div>
                        </div>
                        <div className="wrap-links">
                            <div className="text-wrapper-3">General Enquiry :</div>
                            <div className="text-wrapper-4">Kiev.Florist.Studio@gmail.com</div>
                        </div>
                        <div className="Social-links">
                            <div className="text-wrapper-6">Follow Us</div>
                            <div className="social-m-link">
                                <img className="instergram" alt="instegram" src="instergram.svg"/>
                                <img className="Pinterest" alt="Pinterest" src="printerest.svg"/>
                                <img className="Facebook" alt="Facebook" src="Facebook.svg"/>
                                <img className="Twitter" alt="Twitter" src="Twitter.svg"/>
                                <img className="Telegram" alt="Telegram" src="Telegram.svg"/>
                            </div>
                        </div>
                    
                </div>
                <div className="col-md-3">
                    <div className="text-wrapper-2">Shop</div>
                    <div className="wrap-links-2">
                        <div className="text-wrapper-7">All Products</div>
                        <div className="text-wrapper-7">Fresh Flowers</div>
                        <div className="text-wrapper-7">Dried Flowers</div>
                        <div className="text-wrapper-7">Live Plants</div>
                        <div className="text-wrapper-7">Designer Vases</div>
                        <div className="text-wrapper-7">Aroma Candles</div>
                        <div className="text-wrapper-7">Freshener Diffuser</div>
                    </div>
                    <div className="text-wrapper-6">Service</div>
                    <div className="wrap-links-2">
                        <div className="text-wrapper-7">Flower Subcription</div>
                        <div className="text-wrapper-7">Wedding &amp; Events</div>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    <div className="text-wrapper-2">About Us</div>
                    <div className="wrap-link-2">
                        <div className="text-wrapper-7">Our story</div>
                        <div className="text-wrapper-7">Blog</div> 
                    </div>
                    <div className="wrap-link-2">
                        <div className="text-wrapper-7">Shipping &amp; returns</div>
                        <div className="text-wrapper-7">Terms &amp; conditions</div> 
                        <div className="text-wrapper-7">Privacy policy</div> 
                    </div>
                        
                </div>
            </div>
        </div>

    
    
    
        )

}
