import toSentenceCase from './to-sentence-case';

describe('string/toSentenceCase', () => {
    it('combines string parts into Sentence Case', () => {
        expect(toSentenceCase(['one', 'two', 'three'])).toEqual('One Two Three');
    });
});
