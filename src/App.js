import React from 'react';
import './App.css';
import programmes from './programmes.json';
import { DisplayList } from './classes/displayList.js';
import { ProgrammeTable } from './components/programmeTable.js';
import { ProgrammeRow } from './components/programmeRow.js';
import { modalContentConfirmDelete } from './components/modalContentConfirmDelete.js';
import { Modal } from './components/modal.js';
import { BaseButton } from './components/baseButton';
import { ReactComponent as PlusIcon } from './assets/plus.svg';
import { ReactComponent as CrossIcon } from './assets/x.svg';
import { modalContentAddProgramme } from './components/modalContentAddProgramme';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProgramme: {
        id: null,
        name: '',
        description: '',
        active: true,
        show: true,
      },
      displayList: new DisplayList(programmes),
      showModal: false,
      modalContent: props => {},
      search: '',
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
          <section id="extras">
            <div className="search">
              <input
                type="text"
                name="search"
                id="search"
                value={this.state.search}
                onChange={event => {
                  return this.handleSearch(event);
                }}
              />
            <BaseButton
              className="ui-button ui-button--icon ui-button--large"
                action={this.handleClearSearch}
              >
                {' '}
                <CrossIcon /> Clear search{' '}
              </BaseButton>
            </div>
            <BaseButton
              className="ui-button ui-button--icon ui-button--large"
              action={this.handleAdd}
            >
              <PlusIcon />
              Add Programme
            </BaseButton>
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
  resetSelectedProgramme() {
    this.setState({
      selectedProgramme: {
        id: null,
        name: '',
        description: '',
        active: true,
      },
    });
  }
  updateSelectedProgramme(key, value) {
    let selectedProgramme = this.state.selectedProgramme;
    selectedProgramme[key] = value;
    this.setState({ selectedProgramme });
  }
  handleAdd() {
    const modalContentProps = {
      programme: this.state.selectedProgramme,
      title: 'Add Programme',
      updateName: ({ target }) => {
        this.updateSelectedProgramme('name', target.value);
      },
      updateDescription: ({ target }) => {
        this.updateSelectedProgramme('description', target.value);
      },
      updateActive: ({ target }) => {
        this.updateSelectedProgramme('active', target.checked);
      },
      confirm: () => {
        this.closeModal();
        this.doAdd(this.state.selectedProgramme);
      },
      cancel: () => {
        this.resetSelectedProgramme();
        this.closeModal();
      },
    };
    this.setState({
      showModal: true,
      modalContent: () => {
        const cpt = modalContentAddProgramme;
        return cpt(modalContentProps);
      },
    });
  }
  handleSearch({ target }) {
    let search = this.state.search;
    search = target.value;
    let displayList = this.state.displayList.search(search);
    this.setState({ search, displayList });
  }
  handleClearSearch = () => {
    const search = '';
    let displayList = this.state.displayList.search(search);
    this.setState({ search, displayList });
  };
  doAdd(newProgramme) {
    const displayList = this.state.displayList.addProgramme(newProgramme);
    this.setState({ displayList });
    this.resetSelectedProgramme();
  }
}

export default App;
