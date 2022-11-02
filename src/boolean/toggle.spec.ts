import toggle from './toggle';

describe('boolean/toggle', () => {
    it('returns true when provided with false', () => {
        expect(toggle (false)).toEqual(true);
    });

    it('returns false when provided with true', () => {
        expect(toggle (true)).toEqual(false);
    });
});
