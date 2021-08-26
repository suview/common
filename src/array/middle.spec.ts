import middle from './middle';

describe('array/middle', () => {
    it('returns all but the first and last element of an array', () => {
        expect(middle([1, 2, 3, 4])).toEqual([2, 3]);
    });

    it('returns an empty array if provided array contains single element', () => {
        expect(middle([1])).toEqual([]);
    });

    it('returns an empty array if provided array contains two elements', () => {
        expect(middle([1, 2])).toEqual([]);
    });

    it('returns an empty array if provided array contains no elements', () => {
        expect(middle([])).toEqual([]);
    });
});
