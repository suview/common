import crossDimension from './cross-dimension';

describe('layout/crossDimension', () => {
    it('returns height when orientation is horizontal', () => {
        const box = { width: 100, height: 50 };

        expect(crossDimension ('horizontal') (box)).toEqual(50);
    });

    it('returns width when orientation is vertical', () => {
        const box = { width: 100, height: 50 };

        expect(crossDimension ('vertical') (box)).toEqual(100);
    });
});
