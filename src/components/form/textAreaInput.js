import React from 'react';
import styles from './form.module.css';
import { Label } from './label.js';

export const TextAreaInput = ({ name, labelText, value, handleChange }) => {
  return (
    <div className={styles.verticalWrapper}>
      <Label labelFor={name}>{labelText}</Label>
      <textarea
        className={styles.textarea}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
