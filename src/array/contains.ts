/**
 *
 */

import pipeValue from '../core/pipe-value';
import equals from '../core/equals';
import length from './length';
import gte from '../number/gte';
import filter from './filter';

type T = <A extends unknown>(value: A) => (array: A[]) => boolean;

const f: T = value => array => pipeValue(array, filter(equals(value)), length, gte(1));

export default f;
