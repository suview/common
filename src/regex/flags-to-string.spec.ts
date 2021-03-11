import flagsToString from './flags-to-string';

describe('regex/flagsToString', () => {
    it('converts flags object to string', () => {
        expect(flagsToString({ global: true })).toEqual('g');
        expect(flagsToString({ ignoreCase: true })).toEqual('i');
        expect(flagsToString({ multiline: true })).toEqual('m');
    });

    it('handles multiple flags', () => {
        const flags = {
            global: true,
            ignoreCase: true,
            multiline: true
        };

        expect(flagsToString(flags)).toEqual('gim');
    });
});
