import pipeValue from './pipe-value';

describe('string/pipe-value', () => {
    it('allows value to be passed through multiple functions', () => {
        const addTwo = (value: number) => value + 2;
        const double = (value: number) => value * 2;

        expect(pipeValue(3, addTwo, double, addTwo)).toEqual(12);
    });
});
