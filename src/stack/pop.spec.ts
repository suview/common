import pop from './pop';

describe('stack/pop', () => {
    it('removes item from end of existing stack', () => {
        const existingStack = [1, 2, 3, 4];
        const expectedStack = [1, 2, 3];

        expect(pop(existingStack)).toEqual(expectedStack);
    });

    it('removes item from stack containing one item', () => {
        expect(pop([1])).toEqual([]);
    });

    it('leaves stack with no items unchanged', () => {
        expect(pop([])).toEqual([]);
    });
});
