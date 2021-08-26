import isObject from './is-object';

describe('object/isObject', () => {
    it('returns true if value is a simple object', () => {
        expect(isObject({})).toEqual(true);
    });

    it('returns true if value is a class instance', () => {
        expect(isObject(new Date())).toEqual(true);
    });

    it('returns false if value is null', () => {
        expect(isObject(null)).toEqual(false);
    });

    it('returns false if value is array', () => {
        expect(isObject([])).toEqual(false);
    });

    it('returns false if value is primitive', () => {
        expect(isObject('string')).toEqual(false);
        expect(isObject(123)).toEqual(false);
        expect(isObject(true)).toEqual(false);
    });
});
