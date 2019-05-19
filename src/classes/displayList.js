export class DisplayList {
  constructor(programmes) {
    this.programmeList = programmes ? this.cleanUpInput(programmes) : [];
  }
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
   */
  fetchNewId() {
    const existingIDs = this.programmeList.map(programme =>
      parseInt(programme.id)
    );
    return existingIDs[existingIDs.length - 1] + 1;
  }
  getProgrammeByIndex(index) {
    return this.programmeList[index] || {};
  }
  getProgrammeById(id) {
    const parsedId = parseInt(id);
    return (
      this.programmeList.find(programme => programme.id === parsedId) || {}
    );
  }
}
