import isMultiLineSelection from './is-multi-line-selection';

describe('code-edit/isMultiLineSelection', () => {
    it('returns false if selection contains no newline characters', () => {
        const code = {
            source: '{\n    key: value\n}',
            selection: { start: 6, end: 16 }
        };

        expect(isMultiLineSelection(code)).toEqual(false);
    });

    it('returns true if selection does contains newline characters', () => {
        const code = {
            source: '{\n    key: value\n}',
            selection: { start: 6, end: 18 }
        };

        expect(isMultiLineSelection(code)).toEqual(true);
    });
});
