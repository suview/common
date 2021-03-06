import interpolate from './interpolate';

describe('math/interpolate', () => {
    it('returns number between given range', () => {
        expect(interpolate(10, 20, 0)).toEqual(10);
        expect(interpolate(10, 20, 0.25)).toEqual(12.5);
        expect(interpolate(10, 20, 0.5)).toEqual(15);
        expect(interpolate(10, 20, 0.75)).toEqual(17.5);
        expect(interpolate(10, 20, 1)).toEqual(20);
    });

    it('returns extrapolated value for fractions above 1', () => {
        expect(interpolate(10, 20, 2)).toEqual(30);
    });

    it('is curried', () => {
        expect(interpolate(10)(20)(0)).toEqual(10);
    });
});
