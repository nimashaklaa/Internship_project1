import React from "react";
import { Button } from "../components/button";
import { InputText } from "../components/InputText";
import { TextIconButton } from "../components/textIconButton";
export const ContactUs=()=>{
    return(
    <div className="container">
        <div className="col-md-6">
            <div className="row">
                <div className="text-wrapper-13">To Contact Us</div>

            </div>
            <div className ="row">
                <div className ="row">
                    <div className ="col-mod-3">
                        Phone
                    </div>
                    <div className ="col-mod-3">
                        <button className="button">+380980099777</button>
                        <button className="button">+380980099111</button>
                        
                    </div>

                </div>
                <div className="row">
                    <div className ="col-mod-6">
                        Address
                    </div>
                    <div className ="col-mod-6">
                        
                    </div>

                </div>

            </div>
        </div>
        <div className="col-mod-6">

        </div>
        <div className="div-3">
          <div className="left-colum">
            <div className="top-block">
              <div className="text-wrapper-13">To Contact Us</div>
              <div className="div-4">
                <p className="text-wrapper-14">We will call you back</p>
                <div className="input-button">
                  <InputText
                    className="input-text-2"
                    placeholder="+380 XX XXX XX XX"
                    showHalperTxt={false}
                    showLabel={false}
                    size="desktop"
                    state="default"
                  />
                  <Button
                    className="button-2"
                    label="BOOK A CALL"
                    size="desktop-tablet"
                    state="default"
                    type="primary"
                  />
                </div>
              </div>
            </div>
            <div className="bottom-block">
              <div className="element-colum">
                <div className="label-3">
                  <div className="text-wrapper-15">Phone</div>
                </div>
                <div className="phonenumber-button">
                  <TextIconButton
                    className="design-component-instance-node-2"
                    iconRight={false}
                    label="+380980099777"
                    size="desktop"
                    state="default"
                  />
                  <TextIconButton
                    className="design-component-instance-node-2"
                    iconRight={false}
                    label="+380980099111"
                    size="desktop"
                    state="default"
                  />
                </div>
              </div>
              <div className="element-nd-colum">
                <div className="label-3">
                  <div className="text-wrapper-15">Address</div>
                </div>
                <div className="locatin">
                  <div className="info-map-link">
                    <p className="text-wrapper-16">OPENING HOURS: 8 TO 11 P.M.</p>
                    <TextIconButton
                      className="text-icon-button-instance"
                      iconRight={false}
                      label="15/4 Khreshchatyk Street, Kyiv"
                      size="desktop"
                      state="default"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="img" alt="Right colum" src="right-colum.png" />
        </div>


    </div>
    
    )

}
