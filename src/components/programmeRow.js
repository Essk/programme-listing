import React from 'react';
import { ReactComponent as EditIcon } from '../assets/pencil.svg';
import { ReactComponent as CrossIcon } from '../assets/x.svg';
import { ReactComponent as CheckIcon } from '../assets/check.svg';
import { ReactComponent as CircleSlashIcon } from '../assets/circle-slash.svg';
import { ActionButton } from './actionButton';

    hidden={!programme.show}
    <td className="cell-active">
      {props.programme.active ? <CheckIcon /> : <CircleSlashIcon />}
      <span>{props.programme.active ? 'Yes' : 'No'}</span>
    </td>
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
