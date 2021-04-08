/**
 *
 */

import Stack from './type/stack';

type T = <A extends unknown>(item: A, stack: Stack<A>) => Stack<A>;

const f: T = (item, stack) => [...stack, item]; // TODO Change to array.push when it exists

export default f;
