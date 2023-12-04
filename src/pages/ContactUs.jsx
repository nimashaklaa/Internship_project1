import React from "react";
import { Button } from "../components/button";
import { InputText } from "../components/InputText";
import { TextIconButton } from "../components/textIconButton";
import "./ContactUs.css"

export const ContactUs=()=>{
    return(
    <div className="container">
        <div className="col-md-6">
            <div className="row">
                <div className="top-block">
                    <div className="text-wrapper-13">To Contact Us</div>
                    <div className="form-box">
                        <p className="text-wrapper-20">We will call you back</p>
                        <div className="input-button row align-items-start">
                            <div className="col-md-3">
                                <InputText
                                    className="input-text-2"
                                    placeholder="+380 XX XXX XX XX"
                                    showLabel={false}
                                    size="desktop"
                                    state="default"
                                />
                            </div>
                            <div className="col-md-6">
                                <Button
                                    className="button-2"
                                    label="BOOK A CALL"
                                    size="desktop-tablet"
                                    state="default"
                                    type="primary"
                                    color={"white"}
                                    padding={"14px 44px"}
                                    BackgroundColor={"Black"}
                                />

                            </div>
                           
                        </div>
                    
                    </div>   
                </div> 
                
            </div>
            <div className ="row">
                <div className ="row">
                    <div className ="col-md-6"><div className="text-wrapper-phone">Phone</div></div>
                    <div className ="col-md-6"><div className="text-wrapper-Address">Address</div></div>
                </div>
                <div className="row">
                    <div className ="col-mod-6">
                        <img className="vector" alt="Vector" src="Vector.svg"/>
                        <div className="text-wrapper-call1">+380980099777</div>
                        
                    </div>
                    <div className ="col-mod-6">
                        
                    </div>

                </div>

            </div>
        </div>
        <div className="col-mod-6">

        </div>
        


    </div>
    
    )

}