/**
 *
 */

import Vector from './type/vector';
import { multiply } from 'math';

type T = (scaleFactor: number) => (value: Vector) => Vector;

const f: T = scaleFactor => value => value.map(multiply(scaleFactor));

export default f;
