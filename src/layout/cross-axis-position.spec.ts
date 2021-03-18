import crossAxisPosition from './cross-axis-position';

describe('layout/crossAxisPosition', () => {
    it('converts undefined to \'center\'', () => {
        expect(crossAxisPosition(undefined)).toEqual('center');
    });

    it('converts \'top\' to \'start\'', () => {
        expect(crossAxisPosition('top')).toEqual('start');
    });

    it('converts \'bottom\' to \'end\'', () => {
        expect(crossAxisPosition('bottom')).toEqual('end');
    });

    it('converts \'left\' to \'start\'', () => {
        expect(crossAxisPosition('left')).toEqual('start');
    });

    it('converts \'right\' to \'end\'', () => {
        expect(crossAxisPosition('right')).toEqual('end');
    });
});
