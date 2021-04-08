/**
 *
 */

import Stack from './type/stack';

type T = <A extends unknown>(stack: Stack<A>) => Stack<A>;

const f: T = stack => stack.slice(0, -1); // TODO This should be an array method

export default f;
