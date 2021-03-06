import lte from './lte';

describe('number/lte', () => {
    it('returns true if number is less than reference', () => {
        expect(lte(10, 1)).toEqual(true);
    });

    it('returns true if number is equal to reference', () => {
        expect(lte(10, 10)).toEqual(true);
    });

    it('returns false if number is greater than reference', () => {
        expect(lte(10, 100)).toEqual(false);
    });

    it('is curried', () => {
        expect(lte(10)(1)).toEqual(true);
    });
});
