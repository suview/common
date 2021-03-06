import gte from './gte';

describe('number/gte', () => {
    it('returns true if number is greater than reference', () => {
        expect(gte(10, 100)).toEqual(true);
    });

    it('returns true if number is equal to reference', () => {
        expect(gte(10, 10)).toEqual(true);
    });

    it('returns false if number is less than reference', () => {
        expect(gte(10, 1)).toEqual(false);
    });

    it('is curried', () => {
        expect(gte(10)(100)).toEqual(true);
    });
});
