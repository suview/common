/**
 *
 */

import Parser from './type/parser';
import containsAt from '../string/contains-at';

type T = (target: string) => Parser<string>;

const f: T = target => (source, cursor) => {
    return (containsAt(target, cursor, source))
        ? {
            match: target,
            position: { start: cursor, end: cursor + target.length }
        }
        : {
            expected: target,
            position: { start: cursor, end: cursor }
        };
};

export default f;
