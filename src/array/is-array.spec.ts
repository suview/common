import isArray from './is-array';

describe('array/isArray', () => {
    it('returns true when given an array', () => {
        expect(isArray([])).toEqual(true);
        expect(isArray([1, 2, 3])).toEqual(true);
    });

    it('returns false when given a non-string', () => {
        expect(isArray('example')).toEqual(false);
        expect(isArray(123)).toEqual(false);
        expect(isArray(true)).toEqual(false);
        expect(isArray(false)).toEqual(false);
        expect(isArray({ object: true })).toEqual(false);
        expect(isArray(undefined)).toEqual(false);
        expect(isArray(null)).toEqual(false);
    });
});
