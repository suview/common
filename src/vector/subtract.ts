/**
 *
 */

import Vector from './type/vector';
import { mapMultiple } from 'array';
import { subtract } from 'math';

type T = (first: Vector) => (second: Vector) => Vector;

const f: T = first => second => mapMultiple (subtract) (first) (second) as unknown as Vector;

export default f;
