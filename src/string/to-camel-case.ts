/**
 *
 */

import Parts from './type/parts';
import upperCaseFirst from './upper-case-first';

type T = (parts: Parts) => string;

const f: T = parts => {
    const [head, ...tail] = parts;
    return [head, ...tail.map(upperCaseFirst)].join('');
};

export default f;
