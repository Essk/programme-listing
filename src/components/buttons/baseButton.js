import React from 'react';
import button from './button.module.css';
export const BaseButton = ({ className, action, children }) => {
  return (
    <button
      className={`${button.baseButton} ${className}`}
      onClick={() => {
        return action();
      }}
    >
      {children}
    </button>
  );
};
