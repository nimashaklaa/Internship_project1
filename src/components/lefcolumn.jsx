import React from "react";
import "./leftcolumn.css";


export const LeftColum = () => {
  return (
    <div className="left-colum">
      <div className="row">
        <div className="heading">
          <div className="overlap-group">
            <div className="text-wrapper-11">Kyiv LuxeBouquets</div>
            <div className="div">®</div>
          </div>
        </div>
        <p className="p">
          <span className="span">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our{" "}
          </span>
          <span className="text-wrapper-2">Online Flower</span>
          <span className="span">&nbsp;</span>
          <span className="text-wrapper-2">Delivery Service</span>
        </p>
      </div>
      <div className="row-2">
        <div className="decor-colum">
          <img className="img-hero" alt="Img hero" src="./hero.png" />
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-3">
            Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and
            gifts today.
          </p>
        </div>
      </div>
    </div>
  );
};
