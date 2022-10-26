import join from './join';

describe('array/join', () => {
    it('joins a string array with the given separator', () => {
        expect(join ('&') (['one', 'two', 'three'])).toEqual('one&two&three');
    });
});
