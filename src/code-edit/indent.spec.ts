import indent from './indent';

describe('code-edit/indent', () => {
    it('adds requested number of spaces to empty source string', () => {
        const code = {
            source: '',
            selection: { start: 0, end: 0 }
        };
        const expectedOutput = {
            source: '    ',
            selection: { start: 4, end: 4 }
        };

        expect(indent(4, code)).toEqual(expectedOutput);
    });

    it('allows different tab size to be specified', () => {
        const code = {
            source: '',
            selection: { start: 0, end: 0 }
        };
        const expectedOutput = {
            source: '   ',
            selection: { start: 3, end: 3 }
        };

        expect(indent(3, code)).toEqual(expectedOutput);
    });

    it('adds tab character to empty source string', () => {
        const code = {
            source: '',
            selection: { start: 0, end: 0 }
        };
        const expectedOutput = {
            source: '\t',
            selection: { start: 1, end: 1 }
        };

        expect(indent('tab', code)).toEqual(expectedOutput);
    });

    it('adds spaces in the middle of a file', () => {
        const code = {
            source: '{\n    key: value\n}',
            selection: { start: 6, end: 6 }
        };
        const expectedOutput = {
            source: '{\n        key: value\n}',
            selection: { start: 10, end: 10 }
        };

        expect(indent(4, code)).toEqual(expectedOutput);
    });

    it('adds correct number of spaces to align selection with a multiple of the indentation size', () => {
        const code = {
            source: '{\n   key: value\n}',
            selection: { start: 5, end: 5 }
        };
        const expectedOutput = {
            source: '{\n    key: value\n}',
            selection: { start: 6, end: 6 }
        };

        expect(indent(4, code)).toEqual(expectedOutput);
    });

    it('adds tab character in the middle of a file', () => {
        const code = {
            source: '{\n\tkey: value\n}',
            selection: { start: 3, end: 3 }
        };
        const expectedOutput = {
            source: '{\n\t\tkey: value\n}',
            selection: { start: 4, end: 4 }
        };

        expect(indent('tab', code)).toEqual(expectedOutput);
    });

    it('replaces range selection with spaces', () => {
        const code = {
            source: '{\n    key: value\n}',
            selection: { start: 6, end: 16 }
        };
        const expectedOutput = {
            source: '{\n        \n}',
            selection: { start: 10, end: 10 }
        };

        expect(indent(4, code)).toEqual(expectedOutput);
    });

    it('replaces range selection with spaces to align with indentation size', () => {
        const code = {
            source: '{\n   key: value\n}',
            selection: { start: 5, end: 15 }
        };
        const expectedOutput = {
            source: '{\n    \n}',
            selection: { start: 6, end: 6 }
        };

        expect(indent(4, code)).toEqual(expectedOutput);
    });

    it('replaces range selection with tab', () => {
        const code = {
            source: '{\n\tkey: value\n}',
            selection: { start: 3, end: 13 }
        };
        const expectedOutput = {
            source: '{\n\t\t\n}',
            selection: { start: 4, end: 4 }
        };

        expect(indent('tab', code)).toEqual(expectedOutput);
    });

    it('adds spaces to the start of multiple lines', () => {
        const code = {
            source: '{\n    key: value\n    key: value\n}',
            selection: { start: 6, end: 21 }
        };
        const expectedOutput = {
            source: '{\n        key: value\n        key: value\n}',
            selection: { start: 6, end: 29 }
        };

        expect(indent(4, code)).toEqual(expectedOutput);
    });

    it('adds spaces to the start of each line to align with indentation size', () => {
        const code = {
            source: '{\n   key: value\n     key: value\n}',
            selection: { start: 5, end: 21 }
        };
        const expectedOutput = {
            source: '{\n    key: value\n        key: value\n}',
            selection: { start: 5, end: 25 }
        };

        expect(indent(4, code)).toEqual(expectedOutput);
    });

    it('adds tab to the start of multiple lines', () => {
        const code = {
            source: '{\n\tkey: value\n\tkey: value\n}',
            selection: { start: 3, end: 15 }
        };
        const expectedOutput = {
            source: '{\n\t\tkey: value\n\t\tkey: value\n}',
            selection: { start: 3, end: 17 }
        };

        expect(indent('tab', code)).toEqual(expectedOutput);
    });

    it('indents entire line when selection is multiple lines regardless of selection location', () => {
        const code = {
            source: '{\n    key: value\n    key: value\n}',
            selection: { start: 13, end: 21 }
        };
        const expectedOutput = {
            source: '{\n        key: value\n        key: value\n}',
            selection: { start: 13, end: 29 }
        };

        expect(indent(4, code)).toEqual(expectedOutput);
    });

    it('is curried', () => {
        const code = {
            source: '',
            selection: { start: 0, end: 0 }
        };
        const expectedOutput = {
            source: '    ',
            selection: { start: 4, end: 4 }
        };

        expect(indent(4)(code)).toEqual(expectedOutput);
    });

    // TODO Anything quirky to do with mixed tabs and spaces
    // End of file stuff
});
