import React from 'react';
import { ReactComponent as EditIcon } from '../edit-solid.svg';
import { ReactComponent as CrossIcon } from '../times-solid.svg';
import { ActionButton } from './actionButton';

export const ProgrammeRow = props => (
  <tr className={props.programme.active ? 'active' : 'inactive'}>
    <td>{props.programme.id}</td>
    <td>{props.programme.name}</td>
    <td>{props.programme.description}</td>
    <td>{props.programme.active ? 'yes' : 'no'}</td>
    <td className="row-actions">
      <ActionButton
        type="edit"
        label="Edit"
        icon={<EditIcon />}
        action={props.delete}
        programme={props.programme}
      />
      <ActionButton
        type="delete"
        label="Delete"
        icon={<CrossIcon />}
        action={props.delete}
        programme={props.programme}
      />
    </td>
  </tr>
);
