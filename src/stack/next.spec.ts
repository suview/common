import next from './next';

describe('stack/next', () => {
    it('returns the item at the top of the stack', () => {
        expect(next([1, 2, 3, 4])).toEqual(4);
    });

    it('returns undefined from an empty stack', () => {
        expect(next([])).toEqual(undefined);
    });
});
