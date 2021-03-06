import multiply from './multiply';

describe('vector/multiply', () => {
    it('scales given vector', () => {
        const value = [1, 2, 3];
        const scaleFactor = 10;
        const expectedValue = [10, 20, 30];

        expect(multiply(scaleFactor, value)).toEqual(expectedValue);
    });

    it('is curried', () => {
        expect(multiply(10)([1, 2, 3])).toEqual([10, 20, 30]);
    });
});
