import fromCoordinates from './from-coordinates';

describe('vector/fromCoordinates', () => {
    it('creates vector from x and y coordinates', () => {
        const coordinates = { x: 5, y: 10 };
        const expectedValue = [5, 10];

        expect(fromCoordinates(coordinates)).toEqual(expectedValue);
    });

    it('creates vector from x, y and z coordinates', () => {
        const coordinates = { x: 5, y: 10, z: 15 };
        const expectedValue = [5, 10, 15];

        expect(fromCoordinates(coordinates)).toEqual(expectedValue);
    });
});
