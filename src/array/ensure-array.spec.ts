import ensureArray from './ensure-array';

describe('array/ensureArray', () => {
    it('returns array unchanged', () => {
        const value = [1, 2, 3];

        expect(ensureArray(value)).toEqual(value);
    });

    it('returns single item wrapped in an array', () => {
        expect(ensureArray(1)).toEqual([1]);
    });
});
