import length from './length';

describe('array/length', () => {
    it('returns length of provided array', () => {
        expect(length([])).toEqual(0);
        expect(length([1, 2, 3])).toEqual(3);
    });
});
