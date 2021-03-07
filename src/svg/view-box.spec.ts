import viewBox from './view-box';

describe('svg/viewBox', () => {
    it('returns view box string', () => {
        const screenSize = [1920, 1080];
        const worldSize = [500, 500];
        const pan = [50, 50];
        const zoom = 2;

        expect(viewBox(screenSize, worldSize, pan, zoom)).toEqual('-180 30 960 540');
    });

    it('is curried', () => {
        expect(viewBox([1920, 1080])([500, 500])([50, 50])(2)).toEqual('-180 30 960 540');
    });
});
