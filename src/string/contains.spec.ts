import contains from './contains';

describe('string/contains', () => {
    it('returns true if inner string is contained within outer string', () => {
        expect(contains ('ample') ('Example string')).toEqual(true);
    });

    it('returns false if inner string is not contained within outer string', () => {
        expect(contains ('no') ('Example string')).toEqual(false);
    });

    // TODO Determine whether string contains regex match
});
