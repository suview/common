import reduce from './reduce';

describe('array/reduce', () => {
    it('uses native array reduce', () => {
        const array = [1, 2, 3];
        const callback = (a: number) => (b: number) => a + b;

        expect(reduce (callback) (0) (array)).toEqual(6);
    });
});
