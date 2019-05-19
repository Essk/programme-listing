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
    this.programmeList = programmes ? this.cleanUpInput(programmes) : [];
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
}
