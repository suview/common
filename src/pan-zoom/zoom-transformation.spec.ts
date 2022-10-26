import zoomTransformation from './zoom-transformation';

describe('panZoom/zoomTransformation', () => {
    it('returns transformation to zoom screen in', () => {
        const screenSize = [1920, 1080];
        const zoom = 1.5;
        const expectedResult = [1280, 720];

        expect(zoomTransformation (screenSize) (zoom)).toEqual(expectedResult);
    });

    it('returns transformation to zoom screen out', () => {
        const screenSize = [1920, 1080];
        const zoom = 0.5;
        const expectedResult = [3840, 2160];

        expect(zoomTransformation (screenSize) (zoom)).toEqual(expectedResult);
    });

    it('returns supplied transformation if zoom factor is 1', () => {
        const screenSize = [1920, 1080];
        const zoom = 1;

        expect(zoomTransformation (screenSize) (zoom)).toEqual(screenSize);
    });
});
