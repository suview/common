import split from './split';

describe('string/split', () => {
    it('splits string by any occurrence of the provided string delimiter', () => {
        const value = 'oneabctwoabcthree';
        const delimiter = 'abc';

        expect(split(delimiter, value)).toEqual(['one', 'two', 'three']);
    });

    it('splits string by any occurence of the provided regex delimiter', () => {
        const value = 'oneAtwoABCthree';
        const delimiter = /[A-Z]+/;

        expect(split(delimiter, value)).toEqual(['one', 'two', 'three']);
    });

    it('is curried', () => {
        expect(split('-')('one-two')).toEqual(['one', 'two']);
    });
});
