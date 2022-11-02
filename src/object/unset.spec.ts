import unset from './unset';

describe('object/unset', () => {
    it('removes property from provided object', () => {
        const target = { a: 'A', b: 'B' };
        const expectedResult = { b: 'B' };

        expect(unset ('a') (target)).toEqual(expectedResult);
    });

    it('returns object unchanged if provided key is not already set', () => {
        const target = { a: 'A', b: 'B' };

        expect(unset ('c') (target)).toEqual(target);
    });
});

