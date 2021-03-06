import firstN from './first-n';

describe('array/firstN', () => {
    it('returns first n elements of given array', () => {
        expect(firstN(3, [1, 2, 3, 4, 5])).toEqual([1, 2, 3]);
    });

    it('returns all elements of given array if length equals amount', () => {
        expect(firstN(5, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('returns no elements of given array if amount equals 0', () => {
        expect(firstN(0, [1, 2, 3, 4, 5])).toEqual([]);
    });

    it('returns undefined if amount is larger than length of given array', () => {
        expect(firstN(3, [1, 2])).toEqual(undefined);
    });

    it('is curried', () => {
        expect(firstN(3)([1, 2, 3, 4, 5])).toEqual([1, 2, 3]);
    });
});
