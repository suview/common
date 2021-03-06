/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';
import pipeValue from '../core/pipe-value';
import equals from '../core/equals';
import length from './length';
import gte from '../number/gte';
import filter from './filter';

type T = Curried<<A extends unknown>(value: A, array: A[]) => boolean>;

const f: T = curry((value, array) => pipeValue(array, filter(equals(value)), length, gte(1)));

export default f;
