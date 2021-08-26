/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(needle: string, haystack: string) => boolean>;

const f: T = curry((needle, haystack) => haystack.substr(0, needle.length) === needle);

export default f;
