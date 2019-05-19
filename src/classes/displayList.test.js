import programmes from '../programmes.json';
import { DisplayList } from '../classes/displayList';

describe('DisplayList', () => {
  it('instantiates', () => {
    const displayList = new DisplayList(programmes);
    expect(displayList).toBeTruthy;
  });
  it('contains a list of programmes', () => {
    const displayList = new DisplayList(programmes);
    expect(displayList.programmeList).toMatchSnapshot();
  });
  describe('cleanUpInput', () => {
    const displayList = new DisplayList();
    it('extracts the results portion of incomming data object', () => {
      const rawData = {
        stuff: 'things',
        results: [
          {
            property: 'value',
            id: 'id',
            name: 'name',
            shortDescription: 'shortDescription',
            active: 'active',
          },
        ],
      };
      const results = displayList.cleanUpInput(rawData);
      expect(results.length).toBe(rawData.results.length);
      results.forEach(result => {
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('name');
        expect(result).toHaveProperty('description');
        expect(result).toHaveProperty('active');
      });
    });
  });
  describe('fetchNewId', () => {
    it('should return an integer that is not already used as an id in the programmes', () => {
      const displayList = new DisplayList(programmes);
      const newId = displayList.fetchNewId();
      const existingIDs = displayList.programmeList.map(
        programme => programme.id
      );
      expect(typeof newId).toBe('number');
      expect(existingIDs.indexOf(newId)).toBe(-1);
    });
  });
  describe('CRUD functions', () => {
    const displayList = new DisplayList(programmes);
    it('can return a programme by index', () => {
      const result = displayList.getProgrammeByIndex(3);
      expect(result).toEqual({
        active: false,
        description: "Documentary celebrating Taggart's 30th anniversary.",
        id: 1262,
        name: '30 Years of Taggart on TV',
      });
    });
    it('can return a programme by id', () => {
      const expectedResult = {
        active: false,
        description: "Documentary celebrating Taggart's 30th anniversary.",
        id: 1262,
        name: '30 Years of Taggart on TV',
      };
      let result = displayList.getProgrammeById(1262);
      expect(result).toEqual(expectedResult);
      result = displayList.getProgrammeById('1262');
      expect(result).toEqual(expectedResult);
      result = displayList.getProgrammeById('invalidId');
      expect(result).toEqual({});
    });
    it('can add a programme', () => {
      const newProgramme = {
        name: 'Pimp my Doge',
        description: 'Such exciting, so wow',
        active: true,
      };
      const newProgrammeId = displayList.addProgramme(newProgramme);
      const programmeInList = displayList.getProgrammeById(newProgrammeId);
      expect(programmeInList).toEqual(expect.objectContaining(newProgramme));
    });
    it('can delete a programme', () => {
      const startLength = displayList.programmeList.length;
      const deleted = displayList.deleteProgramme(1553);
      expect(deleted).toEqual({
        active: false,
        description:
          'Bradley Walsh hosts a festive spectacular with a variety of guests.',
        id: 1553,
        name: 'A Christmas Cracker',
      });
      expect(displayList.programmeList.length).toEqual(startLength - 1);
      expect(displayList.getProgrammeById(1553)).toEqual({});
    });
    it.todo('can update a prgramme');
  });
});
