/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(reference: number, value: number) => boolean>;

const f: T = curry((reference, value) => value <= reference);

export default f;
