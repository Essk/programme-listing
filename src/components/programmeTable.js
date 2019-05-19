import React from 'react';
export const ProgrammeTable = props => (
  <table className="programmes">
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
