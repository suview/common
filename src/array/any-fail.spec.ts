import anyFail from './any-fail';

describe('array/anyFail', () => {
    const isEven = (a: number) => a % 2 === 0;
    const isGreaterThan5 = (a: number) => a > 5;

    it('returns true if single predicate returns false', () => {
        expect(anyFail ([isEven]) (3)).toEqual(true);
    });

    it('returns false if single predicate returns true', () => {
        expect(anyFail ([isEven]) (4)).toEqual(false);
    });

    it('returns false if all predicates return true', () => {
        expect(anyFail ([isEven, isGreaterThan5]) (6)).toEqual(false);
    });

    it('returns true if any predicate returns false', () => {
        expect(anyFail ([isEven, isGreaterThan5]) (4)).toEqual(true);
    });
});
