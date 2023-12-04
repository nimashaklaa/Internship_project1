import React from "react";

export const Button = ({ label, BackgroundColor,color, state, type ,padding}) => {
  const buttonStyles = {
    // Add any styles you need for your button
    // Example: backgroundColor: "blue", color: "white", etc.
    cursor: "pointer",
    padding: padding||"24px",
    marginTop: "40px",
    color: color||"#111111",
    fontfamily: "Gilroy-Medium",
    backgroundColor:BackgroundColor||"white",


  };

  return (
    <button style={buttonStyles} className={`button-${color} button-${state} button-${type}`} >
      {label}
    </button>
  );
};


