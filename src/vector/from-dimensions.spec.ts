import fromDimensions from './from-dimensions';

describe('vector/fromDimensions', () => {
    it('creates vector from width and height dimensions', () => {
        const dimensions = { width: 5, height: 10 };
        const expectedValue = [5, 10];

        expect(fromDimensions(dimensions)).toEqual(expectedValue);
    });
});
