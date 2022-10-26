import zip from './zip';

describe('array/zip', () => {
    it('merges two arrays', () => {
        const first = [1, 2, 3];
        const second = [4, 5, 6];
        const expectedOutput = [1, 4, 2, 5, 3, 6];

        expect(zip (first) (second)).toEqual(expectedOutput);
    });

    it('returns empty array when both arrays are empty', () => {
        expect(zip ([]) ([])).toEqual([]);
    });

    it('contains tail of first array when it is longer', () => {
        const first = [1, 2, 3];
        const second = [4];
        const expectedOutput = [1, 4, 2, 3];

        expect(zip (first) (second)).toEqual(expectedOutput);
    });

    it('contains tail of second array when it is longer', () => {
        const first = [1, 2];
        const second = [3, 4, 5];
        const expectedOutput = [1, 3, 2, 4, 5];

        expect(zip (first) (second)).toEqual(expectedOutput);
    });
});
