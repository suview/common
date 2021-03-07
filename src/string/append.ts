/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(suffix: string, value: string) => string>;

const f: T = curry((suffix, value) => `${value}${suffix}`);

export default f;
