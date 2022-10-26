import mapBetween from './map-between';

describe('array/mapBetween', () => {
    const add = (a: number) => (b: number) => a + b;

    it('maps over pairs of elements in an array', () => {
        const input = [1, 2, 3, 4];
        const expectedOutput = [1 + 2, 2 + 3, 3 + 4];

        expect(mapBetween (add) (input)).toEqual(expectedOutput);
    });

    it('returns empty array if input array contains one item', () => {
        const input = [1];
        const expectedOutput: number[] = [];

        expect(mapBetween (add) (input)).toEqual(expectedOutput);
    });

    it('returns empty array if input array is empty', () => {
        const input: number[] = [];
        const expectedOutput: number[] = [];

        expect(mapBetween (add) (input)).toEqual(expectedOutput);
    });
});
