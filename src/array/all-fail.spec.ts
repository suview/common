import allFail from './all-fail';

describe('array/allFail', () => {
    const isEven = (a: number) => a % 2 === 0;
    const isGreaterThan5 = (a: number) => a > 5;

    it('returns true if single predicate returns false', () => {
        expect(allFail ([isEven]) (3)).toEqual(true);
    });

    it('returns false if single predicate returns true', () => {
        expect(allFail ([isEven]) (4)).toEqual(false);
    });

    it('returns true if all predicates return false', () => {
        expect(allFail ([isEven, isGreaterThan5]) (3)).toEqual(true);
    });

    it('returns false if any predicate returns true', () => {
        expect(allFail ([isEven, isGreaterThan5]) (4)).toEqual(false);
    });
});
