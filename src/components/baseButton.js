import React from 'react';

export const BaseButton = ({ className, action, children }) => {
  return (
    <button className={`button ${className}`} onClick={action}>
      {children}
    </button>
  );
};
