import first from './first';

describe('array/first', () => {
    it('returns first element of given array', () => {
        expect(first([1, 2, 3])).toEqual(1);
    });

    it('returns undefined if given array is empty', () => {
        expect(first([])).toEqual(undefined);
    });
});
