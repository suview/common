import map from './map';

describe('array/map', () => {
    it('uses native array map', () => {
        const array = [1, 2, 3];
        const callback = (num: number) => num * num;

        expect(map(callback)(array)).toEqual([1, 4, 9]);
    });

    // TODO Currently manually curried due to
    // https://github.com/millsp/ts-toolbelt/issues/207
});
