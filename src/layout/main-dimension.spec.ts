import mainDimension from './main-dimension';

describe('layout/mainDimension', () => {
    it('returns width when orientation is horizontal', () => {
        const box = { width: 100, height: 50 };

        expect(mainDimension ('horizontal') (box)).toEqual(100);
    });

    it('returns height when orientation is vertical', () => {
        const box = { width: 100, height: 50 };

        expect(mainDimension ('vertical') (box)).toEqual(50);
    });
});
