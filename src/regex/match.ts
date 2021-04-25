/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(regex: RegExp | string, value: string) => string[]>;

const f: T = curry((regex, value) => {
    const match = value.match(regex);
    return match ? match.map((x: string) => x) : []; // TODO Use identity function when it exists
});

export default f;
