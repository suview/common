import clamp from './clamp';

describe('number/clamp', () => {
    it('does not affect value within range', () => {
        expect(clamp (0) (255) (128)).toEqual(128);
    });

    it('brings low value up to minimum', () => {
        expect(clamp (0) (255) (-10)).toEqual(0);
    });

    it('brings high value down to maximum', () => {
        expect(clamp (0) (255) (300)).toEqual(255);
    });
});
