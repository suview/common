/**
 *
 */

import Stack from './type/stack';
import last from '../array/last';

type T = <A extends unknown>(stack: Stack<A>) => A | undefined;

const f: T = last;

export default f;
