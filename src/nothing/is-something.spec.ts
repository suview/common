import isSomething from './is-something';

describe('nothing/isSomething', () => {
    it('identifies undefined and null as nothing', () => {
        expect(isSomething(undefined)).toEqual(false);
        expect(isSomething(null)).toEqual(false);
    });

    it('does not identify anything else as nothing', () => {
        expect(isSomething(true)).toEqual(true);
        expect(isSomething(false)).toEqual(true);
        expect(isSomething('string')).toEqual(true);
        expect(isSomething('')).toEqual(true);
        expect(isSomething(1)).toEqual(true);
        expect(isSomething(0)).toEqual(true);
        expect(isSomething(-1)).toEqual(true);
        expect(isSomething(Infinity)).toEqual(true);
        expect(isSomething(-Infinity)).toEqual(true);
        expect(isSomething([])).toEqual(true);
        expect(isSomething([1])).toEqual(true);
        expect(isSomething({})).toEqual(true);
        expect(isSomething({ key: 'value' })).toEqual(true);
    });
});
