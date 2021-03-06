/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(characters: string, value: string) => string>;

const f: T = curry(
    (characters, value) => `${characters[0]}${value}${characters[1] || characters[0]}`
);

export default f;
