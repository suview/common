import isNotNothing from './is-not-nothing';

describe('nothing/isNotNothing', () => {
    it('identifies undefined and null as nothing', () => {
        expect(isNotNothing(undefined)).toEqual(false);
        expect(isNotNothing(null)).toEqual(false);
    });

    it('does not identify anything else as nothing', () => {
        expect(isNotNothing(true)).toEqual(true);
        expect(isNotNothing(false)).toEqual(true);
        expect(isNotNothing('string')).toEqual(true);
        expect(isNotNothing('')).toEqual(true);
        expect(isNotNothing(1)).toEqual(true);
        expect(isNotNothing(0)).toEqual(true);
        expect(isNotNothing(-1)).toEqual(true);
        expect(isNotNothing(Infinity)).toEqual(true);
        expect(isNotNothing(-Infinity)).toEqual(true);
        expect(isNotNothing([])).toEqual(true);
        expect(isNotNothing([1])).toEqual(true);
        expect(isNotNothing({})).toEqual(true);
        expect(isNotNothing({ key: 'value' })).toEqual(true);
    });
});
