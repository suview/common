/**
 *
 */

import pipeValue from '../core/pipe-value';
import front from './front';
import map from './map';

type T = <A, B>(callback: (x: A, y: A) => B) => (arr: A[]) => B[];

const f: T = callback => data => pipeValue(
    data,
    front,
    map((_, index) => callback(
        data[index],
        data[index + 1]
    ))
);

export default f;
