/**
 *
 */

import { pipe } from 'core';
import interpolate from './interpolate';

type T = (minimum: number) => (maximum: number) => number;

const f: T = minimum => maximum => pipe (Math.random) (interpolate (minimum) (maximum));

export default f;
