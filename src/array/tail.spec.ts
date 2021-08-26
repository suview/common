import tail from './tail';

describe('array/tail', () => {
    it('returns all but the first element of an array', () => {
        expect(tail([1, 2, 3])).toEqual([2, 3]);
    });

    it('returns an empty array if provided array contains single element', () => {
        expect(tail([1])).toEqual([]);
    });

    it('returns an empty array if provided array contains no elements', () => {
        expect(tail([])).toEqual([]);
    });
});
