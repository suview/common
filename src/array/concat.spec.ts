import concat from './concat';

describe('array/concat', () => {
    it('merges two arrays', () => {
        expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('allows merging of empty arrays', () => {
        expect(concat([1, 2, 3], [])).toEqual([1, 2, 3]);
    });
});
