/**
 *
 */

import Code from './type/code';
import Indentation from './type/indentation';
import Curried from '../core/type/curried';
import curry from '../core/curry';
import isMultiLineSelection from './is-multi-line-selection';
import linesInSelection from './lines-in-selection';
import indentLine from './indent-line';
import indentationString from './indentation-string';
import contains from '../array/contains';

type T = Curried<(indentation: Indentation, code: Code) => Code>;

const f: T = curry((indentation, code) => {
    // TODO I think we should create
    // indentAcrossLines and indentWithinLine
    // and just have an if/else here

    const { source } = code;
    const { start, end } = code.selection;

    if (isMultiLineSelection(code)) {
        const newSource = source.split('\n').map((line: string, lineNumber: number) => {
            return (contains(lineNumber, linesInSelection(code)))
                ? indentLine(indentation, line)
                : line;
        }).join('\n');

        return {
            source: newSource,
            selection: {
                start,
                end: end + (newSource.length - source.length)
            }
        };
    }

    const preceding = source.substring(0, start);

    const newCharacters = indentationString(
        indentation,
        preceding.split('\n').pop()
    );

    return {
        source: preceding + newCharacters + source.substring(end),
        selection: {
            start: start + newCharacters.length,
            end: start + newCharacters.length
        }
    };
});

export default f;
