import matches from './matches';

describe('regex/matches', () => {
    it('returns true if regex matches value', () => {
        const string = 'abcdef';
        const regex = /cde/;

        expect(matches(regex, string)).toEqual(true);
    });

    it('returns false if regex does not match value', () => {
        const string = 'abcdef';
        const regex = /xyz/;

        expect(matches(regex, string)).toEqual(false);
    });

    it('is curried', () => {
        expect(matches(/x/)('x')).toEqual(true);
    });
});
