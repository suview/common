/**
 *
 */

import { containsOnly, map } from 'array';
import { pipeValue } from 'core';

type T = <A extends any[]>(predicates: Array<(...args: A) => boolean>) => (...args: A) => boolean;

const f: T = predicates => (...args) => {
    type A = typeof predicates[0];
    return pipeValue(
        predicates,
        map ((predicate: A) => predicate(...args)),
        containsOnly (true)
    );
};

export default f;
