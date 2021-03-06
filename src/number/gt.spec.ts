import gt from './gt';

describe('number/gt', () => {
    it('returns true if number is greater than reference', () => {
        expect(gt(10, 100)).toEqual(true);
    });

    it('returns false if number is equal to reference', () => {
        expect(gt(10, 10)).toEqual(false);
    });

    it('returns false if number is less than reference', () => {
        expect(gt(10, 1)).toEqual(false);
    });

    it('is curried', () => {
        expect(gt(10)(100)).toEqual(true);
    });
});
