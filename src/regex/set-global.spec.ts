import setGlobal from './set-global';

describe('regex/setGlobal', () => {
    it('creates a clone of the provided regex', () => {
        const original = /.+/;
        const cloned = setGlobal(true, original);

        expect(cloned).not.toBe(original);
    });

    it('clones regex with new global setting', () => {
        expect(setGlobal(true, /.+/).global).toEqual(true);
        expect(setGlobal(false, /.+/g).global).toEqual(false);
    });

    it('retains other flag settings', () => {
        expect(setGlobal(true, /.+/).ignoreCase).toEqual(false);
        expect(setGlobal(true, /.+/).multiline).toEqual(false);
        expect(setGlobal(true, /.+/i).ignoreCase).toEqual(true);
        expect(setGlobal(true, /.+/m).multiline).toEqual(true);
    });

    it('is curried', () => {
        expect(setGlobal(true)(/.+/).global).toEqual(true);
    });
});
