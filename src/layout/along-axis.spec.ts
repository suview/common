import alongAxis from './along-axis';

describe('layout/alongAxis', () => {
    it('positions a single box at the origin', () => {
        const boxes = [{ width: 100, height: 100 }];
        const expectedLayout = [{ x: 0, y: 0 }];

        expect(alongAxis ('horizontal' as const) (100) (boxes)).toEqual(expectedLayout);
    });

    it('positions multiple boxes horizontally along the center axis', () => {
        const boxes = [
            { width: 100, height: 100 },
            { width: 50, height: 200 },
            { width: 150, height: 50 }
        ];
        const expectedLayout = [
            { x: 0, y: 50 },
            { x: 200, y: 0 },
            { x: 350, y: 75 }
        ];

        expect(alongAxis ('horizontal' as const) (100) (boxes)).toEqual(expectedLayout);
    });

    it('positions multiple boxes vertically along the center axis', () => {
        const boxes = [
            { width: 100, height: 100 },
            { width: 50, height: 200 },
            { width: 150, height: 50 }
        ];
        const expectedLayout = [
            { x: 25, y: 0 },
            { x: 50, y: 200 },
            { x: 0, y: 500 }
        ];

        expect(alongAxis ('vertical' as const) (100) (boxes)).toEqual(expectedLayout);
    });

    it('positions multiple boxes horizontally along the top', () => {
        const boxes = [
            { width: 100, height: 100 },
            { width: 50, height: 200 },
            { width: 150, height: 50 }
        ];
        const expectedLayout = [
            { x: 0, y: 0 },
            { x: 200, y: 0 },
            { x: 350, y: 0 }
        ];

        expect(alongAxis ('horizontal top' as const) (100) (boxes)).toEqual(expectedLayout);
    });

    it('positions multiple boxes vertically along the left', () => {
        const boxes = [
            { width: 100, height: 100 },
            { width: 50, height: 200 },
            { width: 150, height: 50 }
        ];
        const expectedLayout = [
            { x: 0, y: 0 },
            { x: 0, y: 200 },
            { x: 0, y: 500 }
        ];

        expect(alongAxis ('vertical left' as const) (100) (boxes)).toEqual(expectedLayout);
    });

    it('positions multiple boxes horizontally along the bottom', () => {
        const boxes = [
            { width: 100, height: 100 },
            { width: 50, height: 200 },
            { width: 150, height: 50 }
        ];
        const expectedLayout = [
            { x: 0, y: 100 },
            { x: 200, y: 0 },
            { x: 350, y: 150 }
        ];

        expect(alongAxis ('horizontal bottom' as const) (100) (boxes)).toEqual(expectedLayout);
    });

    it('positions multiple boxes vertically along the right', () => {
        const boxes = [
            { width: 100, height: 100 },
            { width: 50, height: 200 },
            { width: 150, height: 50 }
        ];
        const expectedLayout = [
            { x: 50, y: 0 },
            { x: 100, y: 200 },
            { x: 0, y: 500 }
        ];

        expect(alongAxis ('vertical right' as const) (100) (boxes)).toEqual(expectedLayout);
    });
});
