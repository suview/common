import outdent from './outdent';

describe('code-edit/outdent', () => {
    it('returns code unchanged if no whitespace at the start of the source', () => {
        const code = {
            source: 'key: value',
            selection: { start: 0, end: 0 }
        };

        expect(outdent(4, code)).toEqual(code);
    });

    it('removes spaces from the beginning of the source', () => {
        const code = {
            source: '      key: value',
            selection: { start: 6, end: 6 }
        };
        const expectedoutput = {
            source: 'key: value',
            selection: { start: 0, end: 0 }
        };

        expect(outdent(6, code)).toEqual(expectedoutput);
    });

    it('removes tab from the beginning of the source', () => {
        const code = {
            source: '\tkey: value',
            selection: { start: 1, end: 1 }
        };
        const expectedoutput = {
            source: 'key: value',
            selection: { start: 0, end: 0 }
        };

        expect(outdent('tab', code)).toEqual(expectedoutput);
    });

    it('removes only one indentation level of spaces from the beginning of the source', () => {
        const code = {
            source: '        key: value',
            selection: { start: 8, end: 8 }
        };
        const expectedoutput = {
            source: '    key: value',
            selection: { start: 4, end: 4 }
        };

        expect(outdent(4, code)).toEqual(expectedoutput);
    });

    it('removes only one tab from the beginning of the source', () => {
        const code = {
            source: '\t\tkey: value',
            selection: { start: 2, end: 2 }
        };
        const expectedoutput = {
            source: '\tkey: value',
            selection: { start: 1, end: 1 }
        };

        expect(outdent('tab', code)).toEqual(expectedoutput);
    });

    it('removes correct number of spaces to align with multiple of indentation level', () => {
        const code = {
            source: '       key: value',
            selection: { start: 7, end: 7 }
        };
        const expectedoutput = {
            source: '    key: value',
            selection: { start: 4, end: 4 }
        };

        expect(outdent(4, code)).toEqual(expectedoutput);
    });

    it('removes whitespace regardless of selection', () => {
        const code = {
            source: '    key: value',
            selection: { start: 9, end: 14 }
        };
        const expectedoutput = {
            source: 'key: value',
            selection: { start: 5, end: 10 }
        };

        expect(outdent(4, code)).toEqual(expectedoutput);
    });

    it('removes spaces from all lines in the selection', () => {
        const code = {
            source: '{\n    key: value\n    key: value\n}',
            selection: { start: 6, end: 21 }
        };
        const expectedoutput = {
            source: '{\nkey: value\nkey: value\n}',
            selection: { start: 2, end: 13 }
        };

        expect(outdent(4, code)).toEqual(expectedoutput);
    });

    it('removes tab from all lines in the selection', () => {
        const code = {
            source: '{\n\tkey: value\n\tkey: value\n}',
            selection: { start: 3, end: 15 }
        };
        const expectedoutput = {
            source: '{\nkey: value\nkey: value\n}',
            selection: { start: 2, end: 13 }
        };

        expect(outdent('tab', code)).toEqual(expectedoutput);
    });

    it('is curried', () => {
        const code = {
            source: '    key: value',
            selection: { start: 4, end: 4 }
        };
        const expectedoutput = {
            source: 'key: value',
            selection: { start: 0, end: 0 }
        };

        expect(outdent(4)(code)).toEqual(expectedoutput);
    });

    // TODO Anything quirky to do with mixed tabs and spaces
    // End of file stuff
});
