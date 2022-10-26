import map from './map';

describe('array/map', () => {
    it('uses native array map', () => {
        const array = [1, 2, 3];
        const callback = (num: number) => num * num;

        expect(map (callback) (array)).toEqual([1, 4, 9]);
    });

    it('provides index to callback function', () => {
        const array = ['a', 'b', 'c'];
        const callback = (letter: string, index: number) => letter + index;

        expect(map (callback) (array)).toEqual(['a0', 'b1', 'c2']);
    });
});
