import React from 'react';
export const ActionButton = ({ type, label, icon, action, programme }) => {
  return (
    <button
      className={`row-action row-action--${type}`}
      onClick={() => action(programme)}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};
