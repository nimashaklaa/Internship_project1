import React from "react";

export const Button = ({ label, size, state, type }) => {
  const buttonStyles = {
    // Add any styles you need for your button
    // Example: backgroundColor: "blue", color: "white", etc.
    cursor: "pointer"
  };

  return (
    <button style={buttonStyles} className={`button-${size} button-${state} button-${type}`} >
      {label}
    </button>
  );
};


