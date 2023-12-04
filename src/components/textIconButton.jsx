// TextIconButton.jsx

import React from 'react';

export const TextIconButton = ({ className, iconRight, label, size, state }) => {
  // Determine the icon placement based on the `iconRight` prop
  const iconPlacement = iconRight ? 'icon-right' : 'icon-left';

  // Determine the button size based on the `size` prop
  const buttonSizeClass = size === 'desktop' ? 'desktop-size' : 'default-size';

  // Determine the button state based on the `state` prop
  const buttonStateClass = state === 'default' ? 'default-state' : 'other-state';

  return (
    <button className={`text-icon-button ${className} ${iconPlacement} ${buttonSizeClass} ${buttonStateClass}`}>
      {label}
      {/* Add an icon element here if needed */}
    </button>
  );
};


