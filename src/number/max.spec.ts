import max from './max';

describe('number/max', () => {
    it('returns the larger of two numbers', () => {
        expect(max(1, 2)).toEqual(2);
        expect(max(3, 2)).toEqual(3);
        expect(max(1, -1)).toEqual(1);
        expect(max(Infinity, 0)).toEqual(Infinity);
        expect(max(-Infinity, 0)).toEqual(0);
    });

    it('returns the one result when the two numbers are identical', () => {
        expect(max(3, 3)).toEqual(3);
    });

    it('is curried', () => {
        expect(max(3)(2)).toEqual(3);
    });
});
