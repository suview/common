import fuzzySearch from './fuzzy-search';

describe('string/fuzzySearch', () => {
    it('returns true if subject string contains search string', () => {
        expect(fuzzySearch ('subject string') ('ect str')).toEqual(true);
    });

    it('returns false if subject string does not contain search string', () => {
        expect(fuzzySearch ('subject string') ('no')).toEqual(false);
    });

    it('returns true if search characters appear in order in subject string', () => {
        expect(fuzzySearch ('subject string') ('subj str')).toEqual(true);
    });
});
