import React from 'react';
import button from './button.module.css';
export const ActionButton = ({ type, label, icon, action, programme }) => {
  return (
    <button
      className={`${button.actionButton} ${button[type]}`}
      onClick={() => action(programme)}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};
