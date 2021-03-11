/**
 *
 */

import Parts from './type/parts';
import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(delimiter: string | RegExp, value: string) => Parts>;

const f: T = curry((delimiter, value) => value.split(delimiter));

export default f;
