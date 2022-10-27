/**
 *
 */

import pipeValue from 'core/pipe-value';
import match from './match';
import length from 'array/length';
import gt from 'number/gt';

type T = (regex: RegExp | string) => (value: string) => boolean;

const f: T = regex => value => {
    return pipeValue(
        match (regex) (value),
        length, // TODO Use array.isNotEmpty when available
        gt(0)
    );
};

export default f;
