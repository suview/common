import pipe from './pipe';

describe('core/pipe', () => {
    it('allows multiple functions to be composed', () => {
        const addTwo = (value: number) => value + 2;
        const double = (value: number) => value * 2;
        const addTwoThenDoubleThenAddTwo = pipe(addTwo, double, addTwo);

        expect(addTwoThenDoubleThenAddTwo(3)).toEqual(12);
    });
});
