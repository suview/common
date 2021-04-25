import match from './match';

describe('regex/match', () => {
    it('returns regex match', () => {
        const string = 'abcdef';
        const regex = /cde/;

        expect(match(regex, string)).toEqual(['cde']);
    });

    it('returns multiple regex matches', () => {
        const string = 'abcdef';
        const regex = /a|e/g;

        expect(match(regex, string)).toEqual(['a', 'e']);
    });

    it('returns empty array if no matches are found', () => {
        expect(match(/x/, 'abc')).toEqual([]);
    });

    it('allows string to be provided in place of regex', () => {
        const string = 'abcdef';
        const regex = 'cde';

        expect(match(regex, string)).toEqual(['cde']);
    });

    it('is curried', () => {
        expect(match(/a/)('abc')).toEqual(['a']);
    });
});
