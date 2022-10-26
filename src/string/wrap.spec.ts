import wrap from './wrap';

describe('string/wrap', () => {
    it('surrounds string with character', () => {
        expect(wrap ("'") ('example text')).toEqual("'example text'");
        expect(wrap ('"') ('example text')).toEqual('"example text"');
        expect(wrap ('`') ('example text')).toEqual('`example text`');
        expect(wrap ('a') ('example text')).toEqual('aexample texta');
    });

    it('surrounds string with pair of characters', () => {
        expect(wrap ('()') ('example text')).toEqual('(example text)');
        expect(wrap ('[]') ('example text')).toEqual('[example text]');
        expect(wrap ('{}') ('example text')).toEqual('{example text}');
        expect(wrap ('ab') ('example text')).toEqual('aexample textb');
    });
});
