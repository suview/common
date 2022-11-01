/**
 *
 */

import Parts from './type/parts';
import { pipe } from 'core';
import { map } from 'array';
import upperCaseFirst from './upper-case-first';
import { join } from 'array';

type T = (parts: Parts) => string;

const f: T = pipe(
    map(upperCaseFirst),
    join(' ')
);

export default f;
