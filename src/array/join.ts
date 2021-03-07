/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(separator: string, array: string[]) => string>;

const f: T = curry((separator, array) => array.join(separator));

export default f;
