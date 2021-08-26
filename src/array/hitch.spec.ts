import hitch from './hitch';

describe('array/hitch', () => {
    const add = (a: number, b: number) => a + b;

    it('combines two arrays', () => {
        const arrOne = [1, 2, 3];
        const arrTwo = [4, 5, 6];
        const expectedOutput = [1, 2, 3 + 4, 5, 6];

        expect(hitch(add)([arrOne, arrTwo])).toEqual(expectedOutput);
    });

    it('combines many arrays', () => {
        const arrOne = [1, 2, 3];
        const arrTwo = [4, 5, 6];
        const arrThree = [7, 8, 9];
        const arrFour = [10, 11, 12];
        const expectedOutput = [1, 2, 3 + 4, 5, 6 + 7, 8, 9 + 10, 11, 12];

        expect(hitch(add)([arrOne, arrTwo, arrThree, arrFour])).toEqual(expectedOutput);
    });

    it('ignores empty arrays', () => {
        const arrOne = [1, 2, 3];
        const arrTwo: number[] = [];
        const arrThree = [4, 5, 6];
        const expectedOutput = [1, 2, 3 + 4, 5, 6];

        expect(hitch(add)([arrOne, arrTwo, arrThree])).toEqual(expectedOutput);
    });

    it('combines single element with previous and next', () => {
        const arrOne = [1, 2, 3];
        const arrTwo = [4];
        const arrThree = [5, 6, 7];
        const expectedOutput = [1, 2, 3 + 4 + 5, 6, 7];

        expect(hitch(add)([arrOne, arrTwo, arrThree])).toEqual(expectedOutput);
    });

    // TODO Currently manually curried due to
    // https://github.com/millsp/ts-toolbelt/issues/207
});
