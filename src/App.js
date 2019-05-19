import React from 'react';
import './App.css';
import programmes from './programmes.json';
import { ReactComponent as EditIcon } from './edit-solid.svg';
import { ReactComponent as CrossIcon } from './times-solid.svg';
import { DisplayList } from './classes/displayList';
const ProgrammeTable = props => (
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
const ProgrammeRow = props => (
  <tr className={props.programme.active ? 'active' : 'inactive'}>
    <td>{props.programme.id}</td>
    <td>{props.programme.name}</td>
    <td>{props.programme.description}</td>
    <td>{props.programme.active ? 'yes' : 'no'}</td>
    <td className="row-actions">
      <button className="row-action row-action--edit">
        <EditIcon />
        Edit
      </button>
      <button className="row-action row-action--delete">
        <CrossIcon /> Delete
      </button>
    </td>
  </tr>
);
function App() {
  const displayList = new DisplayList(programmes);
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Awesome Programme List</h1>
      </header>
      <main>
        <section id="search">
          <p>search goes here</p>
        </section>
        <section id="data">
          <ProgrammeTable programmeList={displayList.programmeList}>
            {displayList.programmeList.map(programme => (
              <ProgrammeRow programme={programme} key={programme.id} />
            ))}
          </ProgrammeTable>
        </section>
      </main>
      <footer>
        Attribution: Icons used are from Font Awesome in accordance with the
        terms of their
        <a
          target="_blank"
          href="https://fontawesome.com/license"
          rel="noopener noreferrer"
        >
          licence
        </a>
      </footer>
    </div>
  );
}

/**

 */
export default App;
