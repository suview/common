/**
 *
 */

import { pipeValue } from 'core';
import front from './front';
import map from './map';

type T = <A, B>(callback: (x: A) => (y: A) => B) => (data: A[]) => B[];

const f: T = callback => data => pipeValue(
    data,
    front,
    map ((_, index) => callback (data[index]!) (data[index + 1]!))
);

export default f;
