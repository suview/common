import splitBefore from './split-before';

describe('string/splitBefore', () => {
    it('splits string before any occurrence of the provided string delimiter', () => {
        const value = 'a.bc.def';
        const delimiter = '.';

        expect(splitBefore(delimiter, value)).toEqual(['a', '.bc', '.def']);
    });

    //     it('splits string before any occurrence of the provided regex delimiter', () => {
    //         const value = 'a1bc2def';
    //         const delimiter = /[0-9]+/;
    // 
    //         expect(splitBefore(delimiter)(value)).toEqual(['a', '1bc', '2def']);
    //     });
    // 
    it('is curried', () => {
        expect(splitBefore('-')('one-two')).toEqual(['one', '-two']);
    });
});
