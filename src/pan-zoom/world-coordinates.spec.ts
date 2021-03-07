import worldCoordinates from './world-coordinates';

describe('panZoom/worldCoordinates', () => {
    it('returns world coordinates from transformation and screen coordinates', () => {
        const transformation = [50, 250];
        const screenCoordinates = [100, 100];
        const expectedResult = [150, 350];

        expect(worldCoordinates(transformation, screenCoordinates)).toEqual(expectedResult);
    });

    it('is curried', () => {
        expect(worldCoordinates([50, 250])([100, 100])).toEqual([150, 350]);
    });
});
