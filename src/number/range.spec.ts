import range from './range';

describe('number/range', () => {
    it('returns array containing integers between provided range', () => {
        expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    });

    it('returns range starting at zero', () => {
        expect(range(0, 3)).toEqual([0, 1, 2, 3]);
    });

    it('returns range starting below zero', () => {
        expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
    });
});
