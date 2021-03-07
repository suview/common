import centerScreenTransformation from './center-screen-transformation';

describe('panZoom/centerScreenTransformation', () => {
    it('returns transformation which centers the screen', () => {
        const screenSize = [1920, 1080];
        const zoom = 1;
        const expectedResult = [-960, -540];

        expect(centerScreenTransformation(screenSize, zoom)).toEqual(expectedResult);
    });

    it('returns transformation which zooms and then centers the screen', () => {
        const screenSize = [1920, 1080];
        const zoom = 2;
        const expectedResult = [-480, -270];

        expect(centerScreenTransformation(screenSize, zoom)).toEqual(expectedResult);
    });

    it('is curried', () => {
        expect(centerScreenTransformation([1920, 1080])(1)).toEqual([-960, -540]);
    });
});
