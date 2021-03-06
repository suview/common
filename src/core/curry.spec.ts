import curry from './curry';

describe('string/curry', () => {
    it('allows multi argument function to be called normally', () => {
        const fn = (a: number, b: number, c: number): number => a + b + c;
        const curriedFn = curry(fn);

        expect(curriedFn(1, 2, 3)).toEqual(6);
    });

    it('allows function to be called one argument at a time', () => {
        const fn = (a: number, b: number, c: number): number => a + b + c;
        const curriedFn = curry(fn);

        expect(curriedFn(1)(2)(3)).toEqual(6);
    });

    it('allows function to be called with some arguments', () => {
        const fn = (a: number, b: number, c: number): number => a + b + c;
        const curriedFn = curry(fn);

        expect(curriedFn(1, 2)(3)).toEqual(6);
    });
});
