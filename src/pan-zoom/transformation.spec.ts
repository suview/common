import transformation from './transformation';

describe('panZoom/transformation', () => {
    it('returns transformation which centers the screen and world', () => {
        const screenSize = [1920, 1080];
        const worldSize = [500, 500];
        const pan = [0, 0];
        const zoom = 1;
        const expectedResult = [-710, -290];

        expect(transformation (screenSize) (worldSize) (pan) (zoom)).toEqual(expectedResult);
    });

    it('returns transformation which pans', () => {
        const screenSize = [1920, 1080];
        const worldSize = [500, 500];
        const pan = [100, 50];
        const zoom = 1;
        const expectedResult = [-610, -240];

        expect(transformation (screenSize) (worldSize) (pan) (zoom)).toEqual(expectedResult);
    });

    it('returns transformation which zooms', () => {
        const screenSize = [1920, 1080];
        const worldSize = [500, 500];
        const pan = [0, 0];
        const zoom = 2;
        const expectedResult = [-230, -20];

        expect(transformation (screenSize) (worldSize) (pan) (zoom)).toEqual(expectedResult);
    });

    it('returns transformation which pans and zooms', () => {
        const screenSize = [1920, 1080];
        const worldSize = [500, 500];
        const pan = [100, 50];
        const zoom = 2;
        const expectedResult = [-130, 30];

        expect(transformation (screenSize) (worldSize) (pan) (zoom)).toEqual(expectedResult);
    });
});
