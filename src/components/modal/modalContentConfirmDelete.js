import React from 'react';
import { IconButton } from '../buttons/iconButton';
import { ReactComponent as CheckIcon } from '../../assets/check.svg';
import { ReactComponent as CircleSlashIcon } from '../../assets/circle-slash.svg';

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
      <IconButton variant="positive" action={confirm}>
        <CheckIcon /> Confirm
      </IconButton>
      <IconButton variant="neutral" action={cancel}>
        <CircleSlashIcon /> Cancel
      </IconButton>
    </div>
  </div>
);
