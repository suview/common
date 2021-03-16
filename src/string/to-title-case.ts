/**
 *
 */

import Parts from './type/parts';
import pipe from '../core/pipe';
import join from '../array/join';
import upperCaseFirst from './upper-case-first';

type T = (parts: Parts) => string;

const f: T = pipe(
    parts => parts.map(upperCaseFirst), // TODO replace with array.map when it exists
    join(' ')
);

export default f;
