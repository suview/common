/**
 *
 */

import Code from './type/code';
import { range } from 'number';

type T = (code: Code) => number[];

// TODO Quite a bit of potential to make more functional/readable
const f: T = code => {
    const beforeSelection = code.source.substring(0, code.selection.start);
    const linesBeforeSelection = beforeSelection.split('\n').length - 1;
    const selection = code.source.substring(code.selection.start, code.selection.end);
    const linesInSelection = selection.split('\n').length;
    const lineCount = code.source.split('\n').length;
    return range(0, lineCount - 1).filter(lineNumber => {
        if (lineNumber < linesBeforeSelection) return false;
        if (lineNumber >= linesBeforeSelection + linesInSelection) return false;
        return true;
    })
};

export default f;
