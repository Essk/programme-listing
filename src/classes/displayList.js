/**
 * A Programme
 * @typedef {Object} Programme
 * @property {string} name - The name
 * @property {string} description - The description
 * @property {boolean} active - whether active or not
 */

/**
 * A Programme with Id
 * @typedef {Object} ProgrammeWithId
 * @property {number} id - unique id, should be integer
 * @property {string} name - The name
 * @property {string} description - The description
 * @property {boolean} active - whether active or not
 */
export class DisplayList {
  constructor(programmes) {
    this.programmeList = programmes
      ? this.cleanUpInput(programmes).map(p => {
          p.show = true;
          return p;
        })
      : [];
  }
  /**
   *
   * @param {object} rawInput needs to have a results array
   * @returns {ProgrammeWithId[]}
   */
  cleanUpInput(rawInput) {
    return rawInput.results.map(programme => {
      return {
        id: programme.id,
        name: programme.name,
        description: programme.shortDescription,
        active: programme.active,
      };
    });
  }
  /**
   * stubbing the fact that we'd probably have an external service checking this against a DB in a real app
   *
   * @returns {number}
   */
  fetchNewId() {
    const existingIDs = this.programmeList.map(programme =>
      parseInt(programme.id)
    );
    return existingIDs[existingIDs.length - 1] + 1;
  }

  /**
   * @param {number} index Array index
   * @return {ProgrammeWithId | object} a prgramme object or an empty object
   */
  getProgrammeByIndex(index) {
    return this.programmeList[index] || {};
  }

  /**
   * @param {number | string} id id of programme - strings will be converted to integers
   * @return {ProgrammeWithId | object} a prgramme object or an empty object
   */
  getProgrammeById(id) {
    const parsedId = parseInt(id);
    return (
      this.programmeList.find(programme => programme.id === parsedId) || {}
    );
  }

  /**
   * @param {Programme} newProgramme to be added
   * @return {number} id of the programme
   */
  addProgramme(newProgramme) {
    const newId = this.fetchNewId();
    newProgramme.id = newId;
    this.programmeList.push(newProgramme);
    return this;
  }

  /**
   * @param {number} id of programme to be deleted
   * @return {ProgrammeWithId || object} programme object that was deleted or empty object
   */
  deleteProgramme(id) {
    const idx = this.programmeList.findIndex(
      programme => programme.id === parseInt(id)
    );
    if (idx === -1) {
      return {};
    }
    this.programmeList.splice(idx, 1);
    return this;
  }
  /**
   *
   * @param {number|string} id
   * @param {Programme} programme
   * @returns {ProgrammeWithId|object}
   */
  updateProgramme(id, programme) {
    const idx = this.programmeList.findIndex(
      programme => programme.id === parseInt(id)
    );
    if (idx === -1) {
      return {};
    }
    programme.id = id;
    this.programmeList.splice(idx, 1, programme);
    return this;
  }
  search(str) {
    this.programmeList = this.programmeList.map(programme => {
      programme.show = programme.name.toLowerCase().includes(str.toLowerCase());
      return programme;
    });
    return this;
  }
}
