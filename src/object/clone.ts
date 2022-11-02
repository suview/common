/**
 *
 */

import { clone } from 'ramda'

type T = <A>(target: A) => A;

const f: T = target => clone(target);

export default f;
