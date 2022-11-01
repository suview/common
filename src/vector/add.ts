/**
 *
 */

import Vector from './type/vector';
import { mapMultiple } from 'array';
import { add } from 'math';

type T = (first: Vector) => (second: Vector) => Vector;

const f: T = first => second => mapMultiple(add) (first) (second) as unknown as Vector;

export default f;
