import React from 'react';
import table from './table.module.css';
export const ProgrammeTable = props => (
  <table className={table.programmes}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Active</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>{props.children}</tbody>
  </table>
);
