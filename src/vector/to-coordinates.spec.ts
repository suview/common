import toCoordinates from './to-coordinates';

describe('vector/toCoordinates', () => {
    it('creates x and y coordinates from vector', () => {
        const vector = [5, 10];
        const expectedValue = { x: 5, y: 10 };

        expect(toCoordinates(vector)).toEqual(expectedValue);
    });

    it('creates x, y and z coordinates from vector', () => {
        const vector = [5, 10, 15];
        const expectedValue = { x: 5, y: 10, z: 15 };

        expect(toCoordinates(vector)).toEqual(expectedValue);
    });
});
