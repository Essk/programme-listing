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
