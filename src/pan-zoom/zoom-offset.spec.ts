import zoomOffset from './zoom-offset';

describe('pan-zoom/zoomOffset', () => {
    it('returns pan offset vector when zoom level changes', () => {
        const screenSize = [1920, 1080];
        const worldSize = [500, 500];
        const pan = [100, 100];
        const previousZoom = 1.5;
        const newZoom = 2;
        const origin = [1440, 810];

        const result = zoomOffset
            (screenSize)
            (worldSize)
            (pan)
            (previousZoom)
            (newZoom)
            (origin);

        expect(result).toEqual([80, 45]);
    });
});
