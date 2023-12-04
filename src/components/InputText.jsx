// InputText.jsx

import React from 'react';

export const InputText = ({ className, placeholder, showHelperTxt, showLabel, size, state }) => {
  // Determine the input size based on the `size` prop
  const inputSizeClass = size === 'desktop' ? 'desktop-size' : 'default-size';

  // Determine the input state based on the `state` prop
  const inputStateClass = state === 'default' ? 'default-state' : 'other-state';

  return (
    <div className={`input-text ${className} ${inputSizeClass} ${inputStateClass}`}>
      {showLabel && <label className="label">Label Text</label>}
      <input
        type="text"
        placeholder={placeholder}
      />
      {showHelperTxt && <div className="helper-text">Helper Text</div>}
    </div>
  );
};


