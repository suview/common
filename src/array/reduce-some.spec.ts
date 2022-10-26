import reduceSome from './reduce-some';

describe('array/reduceSome', () => {
    const add = (a: number, b: number) => a + b;
    const isEven = (x: number) => x % 2 === 0;

    it('reduces consecutive values which are identified by predicate', () => {
        const input = [1, 2, 4, 2, 1];
        const expectedOutput = [1, 8, 1];

        expect(reduceSome (isEven) (add) (0) (input)).toEqual(expectedOutput);
    });

    it('reduces multiple consecutive series', () => {
        const input = [1, 2, 4, 2, 1, 2, 4, 2, 1];
        const expectedOutput = [1, 8, 1, 8, 1];

        expect(reduceSome (isEven) (add) (0) (input)).toEqual(expectedOutput);
    });

    it('reduces series at the start and end of input array', () => {
        const input = [2, 4, 1, 2, 4];
        const expectedOutput = [6, 1, 6];

        expect(reduceSome (isEven) (add) (0) (input)).toEqual(expectedOutput);
    });

    it('returns input unchanged if no elements match predicate', () => {
        const input = [1, 3, 5];

        expect(reduceSome (isEven) (add) (0) (input)).toEqual(input);
    });

    it('reduces entire input if all elements match predicate', () => {
        const input = [2, 4, 6];
        const expectedOutput = [12];

        expect(reduceSome (isEven) (add) (0) (input)).toEqual(expectedOutput);
    });
});
