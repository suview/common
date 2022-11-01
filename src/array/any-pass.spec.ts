import anyPass from './any-pass';

describe('array/anyPass', () => {
    const isEven = (a: number) => a % 2 === 0;
    const isGreaterThan5 = (a: number) => a > 5;

    it('returns true if single predicate returns true', () => {
        expect(anyPass ([isEven]) (4)).toEqual(true);
    });

    it('returns false if single predicate returns false', () => {
        expect(anyPass ([isEven]) (3)).toEqual(false);
    });

    it('returns false if all predicates return false', () => {
        expect(anyPass ([isEven, isGreaterThan5]) (3)).toEqual(false);
    });

    it('returns true if any predicate returns true', () => {
        expect(anyPass ([isEven, isGreaterThan5]) (4)).toEqual(true);
    });
});
