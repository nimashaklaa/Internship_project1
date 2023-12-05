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
                        <div className="flower2">Wedding & Event Decor</div>
                        <p className="para-ser2">
                        Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.
                        </p>
                        <div className="sub-button2">
                    <Button label="SUBSCRIBE NOW" padding={"20px 60px"}BackgroundColor="transparent" color="white" border="2px solid white"state="default" type="secondary" />
                </div>
                </div>
                
            </div>
        </div>
        <div className="row">
            hello
        </div>
    </div>
    )
}