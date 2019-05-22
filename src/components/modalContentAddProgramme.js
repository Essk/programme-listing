import React from 'react';
import { BaseButton } from './baseButton';
import { ReactComponent as CheckIcon } from '../assets/check.svg';
import { ReactComponent as CircleSlashIcon } from '../assets/circle-slash.svg';

/** note lowercase identifier to stop Babel interpreting the JSX too early - this implemtation is possibly too magical to be long term practical */
export const modalContentAddProgramme = ({
  programme,
  confirm,
  cancel,
  title,
  updateName,
  updateDescription,
  updateActive,
}) => (
  <div className="modal-inner confirm-delete">
    <h2 id="modalTitle">{title}</h2>
    <form>
      <div>
        <label htmlFor="programmeName">Programme Name</label>
        <input
          name="programmeName"
          id="programmeName"
          type="text"
          value={programme.name}
          onChange={event => {
            return updateName(event);
          }}
        />
      </div>
      <div>
        <label htmlFor="programmeDescription">Programme Description</label>
        <textarea
          name="programmeDescription"
          id="programmeDescription"
          type="text"
          value={programme.description}
          onChange={event => {
            return updateDescription(event);
          }}
        />
      </div>
      <div>
        <label htmlFor="programmeActive">Active?</label>
        <input
          name="programmeActive"
          id="programmeActive"
          type="checkbox"
          checked={programme.active}
          onChange={event => {
            return updateActive(event);
          }}
        />
      </div>
    </form>
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
