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
    this.state = {
      displayList: displayList,
      showModal: false,
      modalContent: null,
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.showModal ? <div> HAI </div> : null}

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
        <footer />
      </div>
    );
  }
  handleDelete = programme => {
    this.setState({
      displayList: this.state.displayList.deleteProgramme(programme.id),
    });
  };
}

/**

 */
export default App;
