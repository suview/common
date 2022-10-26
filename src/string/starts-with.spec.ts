import startsWith from './starts-with';

describe('string/startsWith', () => {
    it('returns true if string begins with substring', () => {
        expect(startsWith ('example') ('example string')).toEqual(true);
    });

    it('returns false if substring exists later in the string', () => {
        expect(startsWith ('example') ('string example')).toEqual(false);
    });

    it('returns false if substring does not exist in target string', () => {
        expect(startsWith ('example') ('different string')).toEqual(false);
    });
});
