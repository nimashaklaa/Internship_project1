import React from 'react';
import './benifitBlock.css'

export const BenefitBlock = ({ className, description, label}) => {
  return (
    <div className={className}>
      <div className="benefit-block">
        <h3 className="label">{label}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

