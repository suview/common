import isString from './is-string';

describe('string/isString', () => {
    it('returns true when given a string', () => {
        expect(isString('example')).toEqual(true);
    });

    it('returns false when given a non-string', () => {
        expect(isString(123)).toEqual(false);
        expect(isString(true)).toEqual(false);
        expect(isString(false)).toEqual(false);
        expect(isString([1, 2, 3])).toEqual(false);
        expect(isString({ object: true })).toEqual(false);
        expect(isString(undefined)).toEqual(false);
        expect(isString(null)).toEqual(false);
    });
});
