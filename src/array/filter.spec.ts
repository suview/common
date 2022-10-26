import filter from './filter';

describe('array/filter', () => {
    it('returns subset of array which matches the provided predicate', () => {
        const isEven = (value: number) => value % 2 === 0;
        const array = [1, 2, 3, 4, 5, 6];

        expect(filter (isEven) (array)).toEqual([2, 4, 6]);
    });
});
