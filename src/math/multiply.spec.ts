import multiply from './multiply';

describe('math/multiply', () => {
    it('multiplies two numbers', () => {
        expect(multiply(2, 3)).toEqual(6);
    });

    it('is curried', () => {
        expect(multiply(2)(3)).toEqual(6);
    });
});
