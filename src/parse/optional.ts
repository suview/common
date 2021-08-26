/**
 *
 */

import Parser from './type/parser';

type T = <A>(parser: Parser<A>) => Parser<A | null>;

const f: T = parser => (source, cursor) => {
    const result = parser(source, cursor);
    if (!result.match && result.expected) {
        return {
            position: {
                start: cursor,
                end: cursor
            }
        };
    }
    return result;
};

export default f;
