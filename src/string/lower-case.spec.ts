import lowerCase from './lower-case';

describe('string/lowerCase', () => {
    it('changes string to lower-case', () => {
        expect(lowerCase('Example String')).toEqual('example string');
    });

    it('does not change lower-cased string', () => {
        expect(lowerCase('example string')).toEqual('example string');
    });
});
