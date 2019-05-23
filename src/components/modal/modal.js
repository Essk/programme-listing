import React from 'react';
import { ReactComponent as CrossIcon } from '../../assets/x.svg';
import modal from './modal.module.css';
export const Modal = props => (
  <div role="dialog" aria-labelledby="modalTitle" className={modal.modal}>
    <div className={modal.content}>
      <button className={modal.close} onClick={props.close}>
        <CrossIcon />
        Close
      </button>
      {props.children}
    </div>
  </div>
);
