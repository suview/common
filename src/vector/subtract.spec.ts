import subtract from './subtract';

describe('vector/subtract', () => {
    it('subtracts the individual parts of a two dimensional vector', () => {
        const toSubtract = [5, 10];
        const value = [10, 15];

        expect(subtract (toSubtract) (value)).toEqual([5, 5]);
    });

    it('subtracts the individual parts of a three dimensional vector', () => {
        const toSubtract = [5, 10, 15];
        const value = [10, 15, 20];

        expect(subtract (toSubtract) (value)).toEqual([5, 5, 5]);
    });
});
