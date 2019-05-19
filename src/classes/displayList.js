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
}
