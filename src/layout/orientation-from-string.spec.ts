import orientationFromString from './orientation-from-string';

describe('layout/orientationFromString', () => {
    it('returns correct orientation for each orientation string', () => {
        expect(orientationFromString('horizontal')).toEqual({
            main: 'horizontal',
            cross: 'center'
        });

        expect(orientationFromString('horizontal top')).toEqual({
            main: 'horizontal',
            cross: 'start'
        });

        expect(orientationFromString('horizontal bottom')).toEqual({
            main: 'horizontal',
            cross: 'end'
        });

        expect(orientationFromString('vertical')).toEqual({
            main: 'vertical',
            cross: 'center'
        });

        expect(orientationFromString('vertical left')).toEqual({
            main: 'vertical',
            cross: 'start'
        });

        expect(orientationFromString('vertical right')).toEqual({
            main: 'vertical',
            cross: 'end'
        });
    });
});
