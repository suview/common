import isNothing from './is-nothing';

describe('nothing/isNothing', () => {
    it('identifies undefined and null as nothing', () => {
        expect(isNothing(undefined)).toEqual(true);
        expect(isNothing(null)).toEqual(true);
    });

    it('does not identify anything else as nothing', () => {
        expect(isNothing(true)).toEqual(false);
        expect(isNothing(false)).toEqual(false);
        expect(isNothing('string')).toEqual(false);
        expect(isNothing('')).toEqual(false);
        expect(isNothing(1)).toEqual(false);
        expect(isNothing(0)).toEqual(false);
        expect(isNothing(-1)).toEqual(false);
        expect(isNothing(Infinity)).toEqual(false);
        expect(isNothing(-Infinity)).toEqual(false);
        expect(isNothing([])).toEqual(false);
        expect(isNothing([1])).toEqual(false);
        expect(isNothing({})).toEqual(false);
        expect(isNothing({ key: 'value' })).toEqual(false);
    });
});
