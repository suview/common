import contains from './contains';

describe('array/contains', () => {
    it('returns true if array contains given value', () => {
        expect(contains(2, [1, 2, 3, 4, 5])).toEqual(true);
    });

    it('returns false if array does not contain given value', () => {
        expect(contains(6, [1, 2, 3, 4, 5])).toEqual(false);
    });

    it('is curried', () => {
        expect(contains(2)([1, 2, 3])).toEqual(true);
    });
});
