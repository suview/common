/**
 *
 */

import Curried from './type/curried';
import curry from './curry';

type T = Curried<<A extends unknown>(first: A, second: A) => boolean>;

const f: T = curry((first, second) => first === second);

export default f;
