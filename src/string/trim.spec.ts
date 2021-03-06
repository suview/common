import trim from './trim';

describe('string/trim', () => {
    it('removes whitespace from the beginning and end of given string', () => {
        // Note that the following example contains spaces and tabs
        expect(trim(' 	Example string 	 ')).toEqual('Example string');
    });

    it('does not remove whitespace from the middle of a string', () => {
        // Note that the following example contains spaces and tabs
        expect(trim('Example 	 string')).toEqual('Example 	 string');
    });
});
