/**
 *
 */

import Vector from './type/vector';
import mapMultiple from '../array/map-multiple';
import add from '../math/add';

type T = (first: Vector) => (second: Vector) => Vector;

const f: T = first => second => mapMultiple(add) (first) (second) as unknown as Vector;

export default f;
