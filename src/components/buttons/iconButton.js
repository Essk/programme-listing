import React from 'react';
import button from './button.module.css';
import { BaseButton } from './baseButton.js';
export const IconButton = ({ action, variant, children }) => {
  return (
    <BaseButton
      className={`${button.iconButton} ${button[variant]}`}
      action={action}
    >
      {children}
    </BaseButton>
  );
};
