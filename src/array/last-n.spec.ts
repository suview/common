import lastN from './last-n';

describe('array/lastN', () => {
    it('returns last n elements of given array', () => {
        expect(lastN(3, [1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
    });

    it('returns all elements of given array if length equals amount', () => {
        expect(lastN(5, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('returns no elements of given array if amount equals 0', () => {
        expect(lastN(0, [1, 2, 3, 4, 5])).toEqual([]);
    });

    it('returns undefined if amount is larger than length of given array', () => {
        expect(lastN(3, [1, 2])).toEqual(undefined);
    });

    it('is curried', () => {
        expect(lastN(3)([1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
    });
});
