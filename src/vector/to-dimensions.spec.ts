import toDimensions from './to-dimensions';

describe('vector/toDimensions', () => {
    it('creates width and height dimensions from vector', () => {
        const vector = [5, 10];
        const expectedValue = { width: 5, height: 10 };

        expect(toDimensions(vector)).toEqual(expectedValue);
    });
});
