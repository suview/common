import upperCase from './upper-case';

describe('string/upperCase', () => {
    it('changes string to upper-case', () => {
        expect(upperCase('example string')).toEqual('EXAMPLE STRING');
    });

    it('does not change upper-cased string', () => {
        expect(upperCase('EXAMPLE STRING')).toEqual('EXAMPLE STRING');
    });
});
