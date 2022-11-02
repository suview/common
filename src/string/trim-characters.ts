/**
 *
 */

import { contains } from 'array';

type T = (characters: string) => (value: string) => string;

const f: T = characters => value => {
    // TODO Use firstCharacter, lastCharacter, front
    // and tail string functions when available
    const chars = characters.split('');
    if (contains (value[0]) (chars)) return f (characters) (value.slice(1));
    if (contains (value[value.length - 1]) (chars)) return f (characters) (value.slice(0, -1));
    return value;
};

export default f;
