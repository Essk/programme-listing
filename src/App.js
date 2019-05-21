import React from 'react';
import './App.css';
import programmes from './programmes.json';
import { DisplayList } from './classes/displayList.js';
import { ProgrammeTable } from './components/programmeTable.js';
import { ProgrammeRow } from './components/programmeRow.js';
import { modalContentConfirmDelete } from './components/modalContentConfirmDelete.js';
import { Modal } from './components/modal.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayList: new DisplayList(programmes),
      showModal: false,
      modalContent: props => {},
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.showModal ? (
          <Modal close={this.closeModal}>{this.state.modalContent()}</Modal>
        ) : null}

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
  closeModal = () => {
    this.setState({ showModal: false });
  };
  handleDelete = programme => {
    const modalContentProps = {
      programme: programme,
      title: 'Delete Programme',
      confirm: () => {
        this.closeModal();
        this.doDelete(programme);
      },
      cancel: () => {
        this.closeModal();
      },
    };
    this.setState({
      showModal: true,
      modalContent: () => {
        const cpt = modalContentConfirmDelete;
        return cpt(modalContentProps);
      },
    });
  };
  doDelete = programme => {
    this.setState({
      displayList: this.state.displayList.deleteProgramme(programme.id),
    });
  };
}

export default App;
