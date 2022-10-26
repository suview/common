import mapToArray from './map-to-array';

describe('object/mapToArray', () => {
    it('converts object to array', () => {
        const obj = { 1: 'One', 2: 'Two', 3: 'Three' };
        const callback = (value: string) => value;
        const expectedArray = ['One', 'Two', 'Three'];

        expect(mapToArray (callback) (obj)).toEqual(expectedArray);
    });

    it('provides value and key to callback', () => {
        const obj = { first: 'One', second: 'Two', third: 'Three' };
        const callback = (value: string, key: string) => `${key}-${value}`;
        const expectedArray = ['first-One', 'second-Two', 'third-Three'];

        expect(mapToArray (callback) (obj)).toEqual(expectedArray);
    });

    it('maps empty object to empty array', () => {
        expect(mapToArray (x => x) ({})).toEqual([]);
    });
});
