import toTitleCase from './to-title-case';

describe('string/toTitleCase', () => {
    it('combines string parts into Title Case', () => {
        expect(toTitleCase(['one', 'two', 'three'])).toEqual('One Two Three');
    });
});
