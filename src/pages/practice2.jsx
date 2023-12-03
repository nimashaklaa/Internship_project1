import React from "react";
import { Navbar } from "../components/Navbar";
import { LeftColum } from "../components/lefcolumn";
import { CardItem } from "../components/cardItems";
import { CardCategory } from "../components/cardCategory";
import { Button } from "../components/button";
import "./practice2.css";

export const ElementHomePage = () => {
  return (
    <div className="element-home-page">
      <div class="container">
        <Navbar/>
        <div class="row">
        <div class="col-md-6">
        <LeftColum />
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-3">
                <CardCategory
                    label="Fresh Flowers"
                    size="desktop"
                    textIconButtonLabel="Shop now"
                    textIconButtonSizeDesktopStateClassName="card-category-instance"
                />
                </div>
                <div class="col-md-3">
                <CardItem class="card-item-instance" showDescription={false} imageUrl="./Picture2.png" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                <CardItem class="card-item-3" showDescription={false} imageUrl="./Picture3.png" />
                </div>
                <div class="col-md-3">
                <CardCategory
                    label="Dried Flowers"
                    size="desktop"
                    textIconButtonLabel="Shop now"
                    textIconButtonSizeDesktopStateClassName="card-category-instance"
                />
                </div>
            </div>
        </div>
        <div class="row">
        <div class="col-md-6">
        
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-3">
                <CardCategory
                    label="Live Plants"
                    size="desktop"
                    textIconButtonLabel="Shop now"
                    textIconButtonSizeDesktopStateClassName="card-category-instance"
                />
                </div>
                <div class="col-md-3">
                <CardItem class="card-item-4" showDescription={false} imageUrl="./Picture4.png" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                <CardItem class="card-item-5" showDescription={false} imageUrl="./Picture5.png" />
                </div>
                <div class="col-md-3">
                <CardCategory
                    label="Aroma Candels"
                    size="desktop"
                    textIconButtonLabel="Shop now"
                    textIconButtonSizeDesktopStateClassName="card-category-instance"
                />
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                <CardCategory
                    label="Freshners"
                    size="desktop"
                    textIconButtonLabel="Shop now"
                    textIconButtonSizeDesktopStateClassName="card-category-instance"
                />
                </div>
                <div class="col-md-3">
                <CardItem class="card-item-6" showDescription={false} imageUrl="./Picture6.png" />
                </div>    
            </div>
            </div>
        <div class="row">
            <div class="col-md-6">
                <div className="div-title">
                <div className="text-wrapper-5">About us</div>
                </div>
            </div>
            <div class="col-md-6">
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
    </div>
    </div>
</div>

    </div>
  );
};
