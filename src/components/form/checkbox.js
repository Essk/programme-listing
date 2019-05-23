import React from 'react';
import styles from './form.module.css';
import { Label } from './label.js';
import { ReactComponent as CheckIcon } from '../../assets/check.svg';

export const Checkbox = ({ name, labelText, checked, handleChange }) => {
  return (
    <div className={styles.wrapper}>
      <Label labelFor={name}>{labelText}</Label>
      <div className={styles.checkboxOuter}>
        <input
          className={styles.checkbox}
          name={name}
          id={name}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <div
          className={
            checked ? styles.styledCheckboxChecked : styles.styledCheckbox
          }
          aria-hidden="true"
        >
          <CheckIcon />
        </div>
      </div>
    </div>
  );
};
