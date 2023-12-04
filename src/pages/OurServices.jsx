import React from "react";
import "./OurServices.css";
import { Button } from "../components/button";


export const OurServices=()=>{
    return(
        <div className="ourservice-container">
        <div className="row">
            <div className="col-md-6">
                <img className="service1" alt="services" src="service1.svg"/>
            </div>
            <div className="col-md-6">
                <div className="text-content1">
                    <div className="Ourservice">SERVICE</div>
                        <div className="flower">Flower Subscriptions</div>
                        <p className="para-ser">
                        Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.
                        </p>
                    </div>
                    <div className="sub-button">
                        <Button label="SUBSCRIBE NOW" padding={"20px 60px"}BackgroundColor="white" color="Black"state="default" type="secondary" />
                    </div>
                

                </div>
            </div>
        <div className="row">
            <div className="service2 ">
                <div className="text-content2">
                    <div className="Ourservice2">SERVICE</div>
                        <div className="flower2">Flower Subscriptions</div>
                        <p className="para-ser2">
                        Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.
                        </p>
                </div>
                <div className="sub-button2">
                    <Button label="SUBSCRIBE NOW" padding={"20px 60px"}BackgroundColor="transparent" color="white"state="default" type="secondary" />
                </div>
            </div>
        </div>
        <div className="row">
            hello
        </div>
    </div>
    )
}