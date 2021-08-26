/**
 *
 */

import Parser from './type/parser';
import Result from './type/result';

type T = <A, B>(parser: Parser<A>, callback: (match: A, result: Result<A>, source: string) => B) => Parser<B>;

const f: T = (parser, callback) => (source, cursor) => {
    const result = parser(source, cursor); // TODO Potentially return a result - does the callback want to change the expectation for example?? 🤔
    const subSource = source.substring(result.position.start, result.position.end);
    return {
        ...(result.match === undefined ? {} : { match: callback(result.match, result, subSource) }),
        expected: result.expected,
        position: result.position
    };
};

export default f;
