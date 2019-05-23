import React from 'react';
import styles from './form.module.css';
import { Label } from './label.js';

export const TextInput = ({ name, labelText, value, handleChange }) => {
  return (
    <div className={styles.wrapper}>
      <Label labelFor={name}>{labelText}</Label>
      <input
        className={styles.input}
        name={name}
        id={name}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
