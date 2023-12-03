import React from "react";
import "./cardCategory.css";

export const CardCategory = ({ label,  textIconButtonLabel, textIconButtonSizeDesktopStateClassName }) => {
  return (
    <div className={`card-category ${textIconButtonSizeDesktopStateClassName}`}>
      <div className="card-category-label">
        <h2>{label}</h2>
      </div>
      <div className="card-category-text-icon-button">
        <p>{textIconButtonLabel}</p>
      </div>
    </div>
  );
};


