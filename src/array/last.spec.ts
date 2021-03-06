import last from './last';

describe('array/last', () => {
    it('returns last element of given array', () => {
        expect(last([1, 2, 3])).toEqual(3);
    });

    it('returns undefined if given array is empty', () => {
        expect(last([])).toEqual(undefined);
    });
});
