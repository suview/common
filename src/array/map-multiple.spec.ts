import mapMultiple from './map-multiple';

describe('array/mapMultiple', () => {
    it('maps over two arrays of the same length', () => {
        const first = [1, 2, 3, 4, 5];
        const second = [2, 3, 4, 5, 6];
        const callback = (x: number) => (y: number): number => x + y;
        const expectedResult = [3, 5, 7, 9, 11];

        expect(mapMultiple (callback) (first) (second)).toEqual(expectedResult);
    });
});
