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
  it.todo('can add a programme');
  it.todo('can delete a programme');
  it.todo('can update a prgramme');
  });
});
