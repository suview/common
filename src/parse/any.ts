/**
 *
 */

import Parser from './type/parser';
import Result from './type/result';
import ensureArray from '../array/ensure-array';

type T = <A>(parsers: Parser<A>[]) => Parser<A>;

const f: T = <A>(parsers: Parser<A>[]) => (source, cursor) => {
    const expected: string[] = [];
    let partialResult: Result<A> | undefined;
    for (let i = 0; i < parsers.length; i += 1) {
        const result = parsers[i](source, cursor);
        if (result.match && !result.expected) return result;
        if (result.match && result.expected) partialResult = result;
        if (result.expected) expected.push(...ensureArray(result.expected));
    }
    return partialResult || {
        expected,
        position: { start: cursor, end: cursor }
    };
};

export default f;
