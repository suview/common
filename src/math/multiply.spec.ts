import multiply from './multiply';

describe('math/multiply', () => {
    it('multiplies two numbers', () => {
        expect(multiply (2) (3)).toEqual(6);
    });
});
