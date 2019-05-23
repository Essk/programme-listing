import React from 'react';
import styles from './form.module.css';
export const Label = ({ labelFor, children }) => {
  return (
    <label className={styles.label} htmlFor={labelFor}>
      {children}
    </label>
  );
};
