/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<<A, B>(first: A[], second: B[]) => Array<A | B>>;

const f: T = curry((first, second) => {
    const longest = (first.length > second.length) ? first : second;
    return longest.flatMap((_: unknown, index: number) => [
        ...(first[index] !== undefined ? [first[index]] : []),
        ...(second[index] !== undefined ? [second[index]] : [])
    ])
});

export default f;
