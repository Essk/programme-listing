import React from 'react';
import { BaseButton } from './baseButton';
import { ReactComponent as CheckIcon } from '../assets/check.svg';
import { ReactComponent as CircleSlashIcon } from '../assets/circle-slash.svg';
import { TextInput } from './form/textInput.js';
import { TextAreaInput } from './form/textAreaInput.js';
import { Checkbox } from './form/checkbox.js';

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
      <TextInput
        name="programmeName"
        labelText="Programme Name:"
        value={programme.name}
        handleChange={event => {
          return updateName(event);
        }}
      />
      <TextAreaInput
        name="programmeDescription"
        labelText="Programme Description:"
        id="programmeDescription"
        value={programme.description}
        handleChange={event => {
          return updateDescription(event);
        }}
      />
      <Checkbox
        labelText="Active?"
        name="programmeActive"
        id="programmeActive"
        type="checkbox"
        checked={programme.active}
        handleChange={event => {
          return updateActive(event);
        }}
      />
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
