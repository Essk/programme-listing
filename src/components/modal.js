import React from 'react';
import { ReactComponent as CrossIcon } from '../assets/x.svg';

export const Modal = props => (
  <div role="dialog" aria-labelledby="modalTitle" className="modal">
    <div className="modal-content">
      <button className="modal-close" onClick={props.close}>
        <CrossIcon />
        Close
      </button>
      {props.children}
    </div>
  </div>
);
