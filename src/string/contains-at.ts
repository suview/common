/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(needle: string, index: number, haystack: string) => boolean>;

const f: T = curry((needle, index, haystack) => haystack.substr(index, needle.length) === needle);

export default f;
