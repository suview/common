import divide from './divide';

describe('vector/divide', () => {
    it('scales given vector', () => {
        const value = [2, 4, 6];
        const scaleFactor = 2;
        const expectedValue = [1, 2, 3];

        expect(divide(scaleFactor, value)).toEqual(expectedValue);
    });

    it('is curried', () => {
        expect(divide(2)([2, 4, 6])).toEqual([1, 2, 3]);
    });
});
