import allPass from './all-pass';

describe('array/allPass', () => {
    const isEven = (a: number) => a % 2 === 0;
    const isGreaterThan5 = (a: number) => a > 5;

    it('returns true if single predicate returns true', () => {
        expect(allPass ([isEven]) (4)).toEqual(true);
    });

    it('returns false if single predicate returns false', () => {
        expect(allPass ([isEven]) (3)).toEqual(false);
    });

    it('returns true if all predicates return true', () => {
        expect(allPass ([isEven, isGreaterThan5]) (6)).toEqual(true);
    });

    it('returns false if any predicate returns false', () => {
        expect(allPass ([isEven, isGreaterThan5]) (4)).toEqual(false);
    });
});
