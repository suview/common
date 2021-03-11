/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(first: string, second: string) => string>;

const f: T = curry((first, second) => `${first}${second}`);

export default f;
