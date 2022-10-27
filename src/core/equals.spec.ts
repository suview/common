import equals from './equals';

describe('core/equals', () => {
    it('returns true if two primitives are equal', () => {
        expect(equals (0) (0)).toEqual(true);
        expect(equals (1) (1)).toEqual(true);
        expect(equals (-1) (-1)).toEqual(true);
        expect(equals (Infinity) (Infinity)).toEqual(true);
        expect(equals (-Infinity) (-Infinity)).toEqual(true);
        expect(equals ('string') ('string')).toEqual(true);
        expect(equals ('') ('')).toEqual(true);
        expect(equals (true) (true)).toEqual(true);
        expect(equals (false) (false)).toEqual(true);
        expect(equals (null) (null)).toEqual(true);
    });

    it('returns false if two primitives are not equal', () => {
        expect(equals (0) (1)).toEqual(false);
        expect(equals (1) (-1)).toEqual(false);
        expect(equals (Infinity) (-Infinity)).toEqual(false);
        expect(equals (Infinity) (0)).toEqual(false);
        expect(equals ('string') ('')).toEqual(false);
        expect(equals (true) (false)).toEqual(false);
    });

    // TODO non-primitives - should use deep equals

    // TODO undefineds should not be equal; NaNs should not be equal
});
