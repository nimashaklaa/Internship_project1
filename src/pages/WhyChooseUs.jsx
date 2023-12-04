import React from "react";
import "./WhyChooseUs.css";
import { BenefitBlock } from "../components/benifitBlock";

export const WhyChooseUs = () => {
  return (
    <div className="container">
    <div className="row">
      
      <div className="col-md-6">
        <div className="div-title">
          <div className="text-wrapper-5">Why choose us ?</div>
        </div>
      </div>
      <div className="col-md-6">
        
        <div className="box">
        <BenefitBlock
                        className="design-component-instance-node-2"
                        description="At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service."
                        label="Stylish bouquets by florists"
                        size="desktop-tablet"
                        />
        </div>
        <div className="box" >
        <BenefitBlock
                        className="design-component-instance-node-2"
                        description="Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably."
                        label="On-time delivery"
                        size="desktop-tablet"
                        />
        </div>
        <div className="box" >
        <BenefitBlock
                        className="design-component-instance-node-2"
                        description="You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence."
                        label="Safe payment"
                        size="desktop-tablet"
                        />
        </div>
        <div className="box" >
        <BenefitBlock
                        className="design-component-instance-node-2"
                        description="With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You&#39;ll save time and money with this hassle-free solution to your floral needs."
                        label="Subscription by your needs"
                        size="desktop-tablet"
                        />
        </div>
       
        
      </div>
      
    </div>
  </div>
  );
};
