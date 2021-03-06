import explode from './explode';

describe('regex/explode', () => {
    it('returns single capture group value', () => {
        const regex = /abc-(123)-def/;
        const value = 'abc-123-def';
        const keys = ['numbers'];

        expect(explode(regex)(keys)(value)).toEqual({ numbers: '123' });
    });

    it('returns multiple capture group values', () => {
        const regex = /(abc)-(123)-(def)/;
        const value = 'abc-123-def';
        const keys = ['lettersOne', 'numbers', 'lettersTwo'];

        expect(explode(regex)(keys)(value)).toEqual({
            lettersOne: 'abc',
            numbers: '123',
            lettersTwo: 'def',
        });
    });

    it('errors if nothing is matched', () => {
        const regex = /xyz/;
        const value = 'abc';
        const expectedError = new Error(
            'Cannot regex-explode string as no pattern was ' +
                "matched ('abc' not matched by /xyz/)"
        );

        expect(() => explode(regex)([])(value)).toThrow(expectedError);
    });

    it('errors if too few keys are provided for capture groups', () => {
        const regex = /(abc)-(123)-(def)/;
        const value = 'abc-123-def';
        const keys = ['letters', 'numbers'];
        const expectedError = new Error(
            'Cannot regex-explode string as there was a mismatch ' +
                'in the number of capture groups expected (3 capture ' +
                'groups in /(abc)-(123)-(def)/ does not match ' +
                'provided keys [letters, numbers])'
        );

        expect(() => explode(regex)(keys)(value)).toThrow(expectedError);
    });

    it('errors if too many keys are provided for capture groups', () => {
        const regex = /abc-(123)-def/;
        const value = 'abc-123-def';
        const keys = ['letters', 'numbers'];
        const expectedError = new Error(
            'Cannot regex-explode string as there was a mismatch ' +
                'in the number of capture groups expected (1 capture ' +
                'groups in /abc-(123)-def/ does not match provided ' +
                'keys [letters, numbers])'
        );

        expect(() => explode(regex)(keys)(value)).toThrow(expectedError);
    });
});
