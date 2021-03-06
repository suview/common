import upperCaseFirst from './upper-case-first';

describe('string/upperCaseFirst', () => {
    it('changes first character of string to be upper-cased', () => {
        expect(upperCaseFirst('example string')).toEqual('Example string');
    });

    it('does not change string if first character is upper-cased', () => {
        expect(upperCaseFirst('Example string')).toEqual('Example string');
        expect(upperCaseFirst('EXAMPLE STRING')).toEqual('EXAMPLE STRING');
    });
});
