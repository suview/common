import toCamelCase from './to-camel-case';

describe('string/toCamelCase', () => {
    it('combines string parts into camelCase', () => {
        expect(toCamelCase(['one', 'two', 'three'])).toEqual('oneTwoThree');
    });
});
