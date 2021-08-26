import front from './front';

describe('array/front', () => {
    it('returns all but the last element of an array', () => {
        expect(front([1, 2, 3])).toEqual([1, 2]);
    });

    it('returns an empty array if provided array contains single element', () => {
        expect(front([1])).toEqual([]);
    });

    it('returns an empty array if provided array contains no elements', () => {
        expect(front([])).toEqual([]);
    });
});
