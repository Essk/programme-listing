import React from 'react';
import { ReactComponent as EditIcon } from '../assets/pencil.svg';
import { ReactComponent as CrossIcon } from '../assets/x.svg';
import { ReactComponent as CheckIcon } from '../assets/check.svg';
import { ReactComponent as CircleSlashIcon } from '../assets/circle-slash.svg';
import { ActionButton } from './buttons/actionButton';

export const ProgrammeRow = ({ programme, deleteAction }) => (
  <tr
    className={[programme.active ? 'active' : 'inactive']}
    hidden={!programme.show}
  >
    <td>{programme.id}</td>
    <td>{programme.name}</td>
    <td>{programme.description}</td>
    <td className="cell-active">
      {programme.active ? <CheckIcon /> : <CircleSlashIcon />}
      <span>{programme.active ? 'Yes' : 'No'}</span>
    </td>
    <td className="row-actions">
      <ActionButton
        type="neutral"
        label="Edit"
        icon={<EditIcon />}
        action={null}
        programme={programme}
      />
      <ActionButton
        type="destructive"
        label="Delete"
        icon={<CrossIcon />}
        action={deleteAction}
        programme={programme}
      />
    </td>
  </tr>
);
