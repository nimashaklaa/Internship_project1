import React from "react";
import { Navbar } from "../components/Navbar";
import { LeftColum } from "../components/lefcolumn";
import { CardItem } from "../components/cardItems";
import { CardCategory } from "../components/cardCategory";
import "./practice.css";

export const ElementHomePage = () => {
  return (
    <div className="element-home-page">
      <div className="div-2">
        <Navbar />
        <div className="div-3">
          <LeftColum />
            <div className="div-2">
              <div className="row ">
                <div className="col-md-3 ">
                  <CardCategory
                    label="Fresh Flowers"
                    size="desktop"
                    textIconButtonLabel="Shop now"
                    textIconButtonSizeDesktopStateClassName="card-category-instance"
                  />
                </div>
                <div className="col-md-3">
                  <CardItem className="card-item-instance" showDescription={false} imageUrl={"./Picture2.png"} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <CardItem className="card-item-3" showDescription={false} imageUrl={"./Picture3.png"} />
                </div>
                <div className="col-md-3">
                  <CardCategory
                    label="Dried Flowers"
                    size="desktop"
                    textIconButtonLabel="Shop now"
                    textIconButtonSizeDesktopStateClassName="card-category-instance"
                  />
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};
