import React from "react";
import { BenefitBlock } from "./BenefitBlock";
import { Button } from "./Button";
import { CardCategory } from "./CardCategory";
import { CardItem } from "./CardItem";
import { Footer } from "./Footer";
import { InputText } from "./InputText";
import { Navbar } from "./Navbar";
import { TextIconButton } from "./TextIconButton";
import "./landingPage.scss";

export const ElementHomePage = () => {
  return (
    <div className="element-home-page">
      <div className="div-2">
        <Navbar className="design-component-instance-node-2" size="desktop" />
        <div className="div-3">
          <img className="img" alt="Left colum" src="left-colum.png" />
          <div className="div-3">
            <div className="div-2">
              <CardCategory
                label="Fresh Flowers"
                size="desktop"
                textIconButtonLabel="Shop now"
                textIconButtonSizeDesktopStateClassName="card-category-instance"
              />
              <CardItem className="card-item-instance" showDescription={false} size="desktop" />
              <CardCategory
                label="Live Plants"
                size="desktop"
                textIconButtonLabel="Shop now"
                textIconButtonSizeDesktopStateClassName="card-category-instance"
              />
              <CardItem className="card-item-2" showDescription={false} size="desktop" />
              <CardCategory
                label="Fresheners"
                size="desktop"
                textIconButtonLabel="Shop now"
                textIconButtonSizeDesktopStateClassName="card-category-instance"
              />
            </div>
            <div className="div-2">
              <CardItem className="card-item-3" showDescription={false} size="desktop" />
              <CardCategory
                label="Dried Flowers"
                size="desktop"
                textIconButtonIconRight={false}
                textIconButtonLabel="Shop now"
                textIconButtonSizeDesktopStateClassName="card-category-instance"
              />
              <CardItem className="card-item-4" showDescription={false} size="desktop" />
              <div className="card-category-2">
                <div className="div-wrapper">
                  <div className="text-wrapper-9">Aroma Candels</div>
                </div>
                <div className="text-icon-button-2">
                  <img className="west" alt="West" src="west-300-opsz24.svg" />
                  <div className="text-wrapper-10">Shop now</div>
                </div>
              </div>
              <CardItem className="card-item-5" showDescription={false} size="desktop" />
            </div>
          </div>
        </div>
        <div className="div-3">
          <div className="div-title">
            <div className="text-wrapper-11">About us</div>
          </div>
          <div className="right-colum">
            <div className="text-content">
              <div className="our-story">OUR STORY</div>
              <div className="heading-paragraph">
                <div className="text-wrapper-12">Kyiv LuxeBouquets</div>
                <p className="we-are-a-modern">
                  We are a modern local floral studio, which specializes in the design and delivery of unique bouquets.
                  We have the best florists who carefully select each look, our studio cooperates directly with farms
                  for growing different flowers, so we always have fresh flowers, which are collected by our florists in
                  exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house
                  plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make
                  someone&#39;s day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers
                  online has never been easier.
                </p>
              </div>
            </div>
            <Button label="LERN MORE" size="desktop-tablet" state="default" type="secondary" />
          </div>
        </div>
        <div className="div-3">
          <div className="div-title">
            <div className="text-wrapper-13">Why choose us ?</div>
          </div>
          <div className="div-2">
            <BenefitBlock
              className="design-component-instance-node-2"
              description="At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service."
              label="Stylish bouquets by florists"
              size="desktop-tablet"
            />
            <BenefitBlock
              className="design-component-instance-node-2"
              description="Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably."
              label="On-time delivery"
              size="desktop-tablet"
            />
            <BenefitBlock
              className="design-component-instance-node-2"
              description="You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence."
              label="Safe payment"
              size="desktop-tablet"
            />
            <BenefitBlock
              className="design-component-instance-node-2"
              description="With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You&#39;ll save time and money with this hassle-free solution to your floral needs."
              label="Subscription by your needs"
              size="desktop-tablet"
            />
          </div>
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
        <div className="section-service">
          <div className="text-wrapper-17">Our Service</div>
        </div>
        <div className="div-3">
          <div className="image" />
          <div className="content-wrapper">
            <div className="content">
              <div className="text-content-2">
                <div className="service">SERVICE</div>
                <div className="div-4">
                  <div className="text-wrapper-18">Flower Subcriptions</div>
                  <p className="text-wrapper-19">
                    Experience the convenience and savings of regular flower deliveries with our flexible subscription
                    service - up to 30% more profitable than one-time purchases.
                  </p>
                </div>
              </div>
              <Button
                className="button-3"
                label="SUBSCRIBE NOW"
                size="desktop-tablet"
                state="pressed"
                type="secondary"
              />
            </div>
          </div>
        </div>
        <div className="service-section">
          <div className="content-2">
            <div className="div-5">
              <div className="service-2">SERVICE</div>
              <div className="div-6">
                <div className="wedding-event-decor">Wedding &amp; Event Decor</div>
                <p className="text-wrapper-20">
                  Let our team of expert florists and designers create stunning, on-trend floral décor for your special
                  day. Trust us to bring your vision to life.
                </p>
              </div>
            </div>
            <Button label="INQUIRE NOW" size="desktop-tablet" state="default" type="tertiary" />
          </div>
        </div>
        <div className="section-reviews">
          <div className="content-3">
            <div className="div-6">
              <div className="div-5">
                <div className="google">
                  <img className="google-logo" alt="Google logo" src="google-logo.png" />
                  <div className="text-wrapper-16">REVIEWS</div>
                </div>
                <div className="text-wrapper-13">Our Clients say</div>
              </div>
              <div className="slider">
                <div className="mask">
                  <img className="img-2" alt="Left arrow" src="left-arrow.svg" />
                  <div className="slide">
                    <p className="ordered-flowers">
                      <span className="span">“</span>
                      <span className="text-wrapper-21">
                        Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly
                        recommend this flower shop!
                      </span>
                      <span className="span">”</span>
                    </p>
                    <div className="text-wrapper-22">– Ronald Richards</div>
                  </div>
                  <img className="img-2" alt="Right arrow" src="right-arrow.svg" />
                </div>
                <div className="slide-nav">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-2" />
                  <div className="ellipse-2" />
                </div>
              </div>
            </div>
            <Button className="button-3" label="READ REVIEWS" size="desktop-tablet" state="pressed" type="secondary" />
          </div>
          <Footer className="footer-instance" />
        </div>
      </div>
    </div>
  );
};
