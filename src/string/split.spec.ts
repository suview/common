import split from './split';

describe('string/split', () => {
    it('splits string by any occurence of the provided delimiter', () => {
        expect(split('abc', 'oneabctwoabcthree')).toEqual(['one', 'two', 'three']);
    });
});
