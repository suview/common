/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<<A extends unknown>(amount: number, array: A[]) => A[] | undefined>;

const f: T = curry((amount, array) => {
    if (amount === 0) return [];
    if (amount > array.length) return undefined;
    return array.slice(0, amount);
});

export default f;
