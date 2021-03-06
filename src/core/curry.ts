/**
 *
 */

import { curry } from 'ramda';
import { F } from 'ts-toolbelt';
import Curried from './type/curried';

type T = <Fn extends F.Function>(fn: Fn) => Curried<Fn>;

const f: T = curry;

export default f;
