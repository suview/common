import lineBreak from './line-break';

describe('code-edit/lineBreak', () => {
    it('adds newline character to end of simple string', () => {
        const code = {
            source: 'key: value',
            selection: { start: 10, end: 10 }
        };
        const expectedOutput = {
            source: 'key: value\n',
            selection: { start: 11, end: 11 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    it('splits line with newline character when selection is in the middle of simple string', () => {
        const code = {
            source: 'key: value',
            selection: { start: 6, end: 6 }
        };
        const expectedOutput = {
            source: 'key: v\nalue',
            selection: { start: 7, end: 7 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    it('replaces selection with newline character when it is a range in the middle of simple string', () => {
        const code = {
            source: 'key: value',
            selection: { start: 3, end: 5 }
        };
        const expectedOutput = {
            source: 'key\nvalue',
            selection: { start: 4, end: 4 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    it('indents new line with spaces to match current line indentation', () => {
        const code = {
            source: '    key: value',
            selection: { start: 14, end: 14 }
        };
        const expectedOutput = {
            source: '    key: value\n    ',
            selection: { start: 19, end: 19 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    it('indents new line with tab to match current line indentation', () => {
        const code = {
            source: '\tkey: value',
            selection: { start: 11, end: 11 }
        };
        const expectedOutput = {
            source: '\tkey: value\n\t',
            selection: { start: 13, end: 13 }
        };

        expect(lineBreak ('tab') (code)).toEqual(expectedOutput);
    });

    it('indents new line to match current indentation from middle of line', () => {
        const code = {
            source: '    key: value',
            selection: { start: 10, end: 10 }
        };
        const expectedOutput = {
            source: '    key: v\n    alue',
            selection: { start: 15, end: 15 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    it('indents new line to match current indentation from range', () => {
        const code = {
            source: '    key: value',
            selection: { start: 7, end: 9 }
        };
        const expectedOutput = {
            source: '    key\n    value',
            selection: { start: 12, end: 12 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    it('indents new line by provided number of spaces if following an open brace', () => {
        const code = {
            source: 'example {',
            selection: { start: 9, end: 9 }
        };
        const expectedOutput = {
            source: 'example {\n    ',
            selection: { start: 14, end: 14 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    it('indents new line by tab if following an open brace', () => {
        const code = {
            source: 'example {',
            selection: { start: 9, end: 9 }
        };
        const expectedOutput = {
            source: 'example {\n\t',
            selection: { start: 11, end: 11 }
        };

        expect(lineBreak ('tab') (code)).toEqual(expectedOutput);
    });

    it('indents new line by provided number of spaces if following an open bracket', () => {
        const code = {
            source: 'example [',
            selection: { start: 9, end: 9 }
        };
        const expectedOutput = {
            source: 'example [\n    ',
            selection: { start: 14, end: 14 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    it('indents new line by tab if following an open bracket', () => {
        const code = {
            source: 'example [',
            selection: { start: 9, end: 9 }
        };
        const expectedOutput = {
            source: 'example [\n\t',
            selection: { start: 11, end: 11 }
        };

        expect(lineBreak ('tab') (code)).toEqual(expectedOutput);
    });

    it('indents new line by provided number of spaces if following an open parenthesis', () => {
        const code = {
            source: 'example (',
            selection: { start: 9, end: 9 }
        };
        const expectedOutput = {
            source: 'example (\n    ',
            selection: { start: 14, end: 14 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    it('indents new line by tab if following an open parenthesis', () => {
        const code = {
            source: 'example (',
            selection: { start: 9, end: 9 }
        };
        const expectedOutput = {
            source: 'example (\n\t',
            selection: { start: 11, end: 11 }
        };

        expect(lineBreak ('tab') (code)).toEqual(expectedOutput);
    });

    it('indents new line if selection is mid-line and following an open brace', () => {
        const code = {
            source: 'example {key: value',
            selection: { start: 9, end: 9 }
        };
        const expectedOutput = {
            source: 'example {\n    key: value',
            selection: { start: 14, end: 14 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    it('indents new line if selection is a range and following an open brace', () => {
        const code = {
            source: 'example { delete key: value',
            selection: { start: 9, end: 17 }
        };
        const expectedOutput = {
            source: 'example {\n    key: value',
            selection: { start: 14, end: 14 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    it('indents by provided number of spaces even if the current line is not indented by a valid multiple', () => {
        const code = {
            source: '   key: value {',
            selection: { start: 15, end: 15 }
        };
        const expectedOutput = {
            source: '   key: value {\n       ',
            selection: { start: 23, end: 23 }
        };

        expect(lineBreak (4) (code)).toEqual(expectedOutput);
    });

    // TODO Anything quirky to do with mixed tabs and spaces
    // End of file stuff
});
