import min from './min';

describe('number/min', () => {
    it('returns the smaller of two numbers', () => {
        expect(min (1) (2)).toEqual(1);
        expect(min (3) (2)).toEqual(2);
        expect(min (1) (-1)).toEqual(-1);
        expect(min (Infinity) (0)).toEqual(0);
        expect(min (-Infinity) (0)).toEqual(-Infinity);
    });

    it('returns the one result when the two numbers are identical', () => {
        expect(min (3) (3)).toEqual(3);
    });
});
