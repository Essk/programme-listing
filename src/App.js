import React from 'react';
import './App.css';
import programmes from './programmes.json';
import { DisplayList } from './classes/displayList.js';
import { ProgrammeTable } from './components/programmeTable.js';
import { ProgrammeRow } from './components/programmeRow.js';

const displayList = new DisplayList(programmes);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayList: displayList };
  }
  render() {
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
            <ProgrammeTable
              programmeList={this.state.displayList.programmeList}
            >
              {this.state.displayList.programmeList.map(programme => (
                <ProgrammeRow
                  programme={programme}
                  key={programme.id}
                  delete={this.handleDelete}
                />
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
  handleDelete = programme => {
    // hmmm not sure about the 'rightness' of this approach, but it has the desired effect
    let newList = this.state.displayList;
    newList.deleteProgramme(programme.id);
    this.setState({ displayList: newList });
  };
}

/**

 */
export default App;
