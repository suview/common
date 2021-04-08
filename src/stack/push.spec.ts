import push from './push';

describe('stack/push', () => {
    it('adds item to empty stack', () => {
        expect(push('Example', [])).toEqual(['Example']);
    });

    it('adds item to end of existing stack', () => {
        const existingStack = [1, 2, 3];
        const expectedStack = [1, 2, 3, 4];

        expect(push(4, existingStack)).toEqual(expectedStack);
    });
});
