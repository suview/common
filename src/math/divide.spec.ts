import divide from './divide';

describe('math/divide', () => {
    it('divides one number by another', () => {
        const factor = 2;
        const value = 10;

        expect(divide (factor) (value)).toEqual(5);
    });
});
