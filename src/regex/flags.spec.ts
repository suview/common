import flags from './flags';

describe('regex/flags', () => {
    it('returns the flags set on a given regex', () => {
        expect(flags(/.+/g)).toEqual({
            global: true,
            ignoreCase: false,
            multiline: false
        });

        expect(flags(/.+/i)).toEqual({
            global: false,
            ignoreCase: true,
            multiline: false
        });

        expect(flags(/.+/m)).toEqual({
            global: false,
            ignoreCase: false,
            multiline: true
        });

        expect(flags(/.+/gim)).toEqual({
            global: true,
            ignoreCase: true,
            multiline: true
        });
    });
});
