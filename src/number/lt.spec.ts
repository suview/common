import lt from './lt';

describe('number/lt', () => {
    it('returns true if number is less than reference', () => {
        expect(lt(10, 1)).toEqual(true);
    });

    it('returns false if number is equal to reference', () => {
        expect(lt(10, 10)).toEqual(false);
    });

    it('returns false if number is greater than reference', () => {
        expect(lt(10, 100)).toEqual(false);
    });

    it('is curried', () => {
        expect(lt(10)(1)).toEqual(true);
    });
});
