import React from "react";
import "./cardItems.css"; 

export const CardItem = ({ className, showDescription,  imageUrl }) => {
  return (
    <div className={`card-item ${className}`}>
      
      <div className="card-image">
        <img src={imageUrl} alt="CardImg" />
      </div>
      {showDescription && (
        <div className="card-description">
          <p>Description goes here...</p>
        </div>
      )}
      
    </div>
  );
};

