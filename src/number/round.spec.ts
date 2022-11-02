import round from './round';

describe('number/round', () => {
    it('rounds number to nearest integer', () => {
        expect(round (1) (1.75)).toEqual(2);
    });

    it('rounds number to nearest fraction', () => {
        expect(round (0.25) (0.8)).toEqual(0.75);
    });

    it('rounds negative numbers', () => {
        expect(round (0.25) (-1.4)).toEqual(-1.5);
    });
});
