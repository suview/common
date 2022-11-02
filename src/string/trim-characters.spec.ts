import trimCharacters from './trim-characters';

describe('string/trimCharacters', () => {
    it('removes given characters from beginning and end of given string', () => {
        expect(trimCharacters ('abc') ('abcExample stringcab')).toEqual('Example string');
    });
});
