/**
 *
 */

import Parser from './type/parser';
import setGlobal from '../regex/set-global';
import last from '../array/last';

type T = (target: RegExp, expected: string) => Parser<string>;

const f: T = (target, expected) => (source, cursor) => {
    const globalTarget = setGlobal(true, target);
    globalTarget.lastIndex = cursor;
    const match = globalTarget.exec(source);

    if (!match || match.index !== cursor) {
        return {
            expected,
            position: { start: cursor, end: cursor }
        };
    }

    const value = last(match);

    return (value === undefined)
        ? {
            expected,
            position: { start: cursor, end: cursor }
        }
        : {
            match: value,
            position: { start: cursor, end: cursor + value.length }
        };
};

export default f;
