import subtract from './subtract';

describe('math/subtract', () => {
    it('subtracts one number from another', () => {
        expect(subtract(2, 3)).toEqual(1);
    });

    it('is curried', () => {
        expect(subtract(2)(3)).toEqual(1);
    });
});
