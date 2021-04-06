/**
 *
 */

import Parts from './type/parts';
import pipe from '../core/pipe';
import map from '../array/map';
import upperCaseFirst from './upper-case-first';
import join from '../array/join';

type T = (parts: Parts) => string;

const f: T = pipe(
    map(upperCaseFirst),
    join(' ')
);

export default f;
