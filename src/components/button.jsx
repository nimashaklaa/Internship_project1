import React from "react";

export const Button = ({ label, color, state, type }) => {
  const buttonStyles = {
    // Add any styles you need for your button
    // Example: backgroundColor: "blue", color: "white", etc.
    cursor: "pointer",
    padding: "24px",
    marginTop: "40px",
    color: "#111111",
    fontfamily: "Gilroy-Medium",
    backgroundColor:color ||"white",

  };

  return (
    <button style={buttonStyles} className={`button-${color} button-${state} button-${type}`} >
      {label}
    </button>
  );
};


