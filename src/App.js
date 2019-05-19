import React from 'react';
import './App.css';
import programmes from './programmes.json';
import { DisplayList } from './classes/displayList';

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
          <table className="programmes">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
            {displayList.programmeList.map(programme => (
              <tr>
                <td>{programme.id}</td>
                <td>{programme.name}</td>
                <td>{programme.description}</td>
                <td>{programme.active ? 'yes' : 'no'}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;
