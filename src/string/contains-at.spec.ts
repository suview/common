import containsAt from './contains-at';

describe('string/containsAt', () => {
    it('returns true if string contains substring at given index', () => {
        expect(containsAt('example', 7, 'string example')).toEqual(true);
    });

    it('returns false if string contains substring at different index', () => {
        expect(containsAt('example', 8, 'string example')).toEqual(false);
    });

    it('returns false if substring does not exist in target string', () => {
        expect(containsAt('example', 0, 'different string')).toEqual(false);
    });

    it('is curried', () => {
        expect(containsAt('example')(7)('string example')).toEqual(true);
    });
});
