import React from 'react';
import { BaseButton } from './baseButton';
import { ReactComponent as CheckIcon } from '../assets/check.svg';
import { ReactComponent as CircleSlashIcon } from '../assets/circle-slash.svg';

/** note lowercase identifier to stop Babel interpreting the JSX too early - this implemtation is possibly too magical to be long term practical */
export const modalContentConfirmDelete = ({
  programme,
  confirm,
  cancel,
  title,
}) => (
  <div className="modal-inner confirm-delete">
    <h2 id="modalTitle">{title}</h2>
    <p>Really delete {programme.name}?</p>
    <div className="modal-buttons">
      <BaseButton className="ui-button ui-button--icon" action={confirm}>
        <CheckIcon />
        <span>Confirm</span>
      </BaseButton>
      <BaseButton className="ui-button ui-button--icon" action={cancel}>
        <CircleSlashIcon />
        <span>Cancel</span>
      </BaseButton>
    </div>
  </div>
);
