/**
 *
 */

import Indentation from './type/indentation';

type T = (indentation: Indentation) => (precedingCharacters: string) => string;

const f: T = indentation => precedingCharacters => {
    if (indentation === 'tab') return '\t';
    return ' '.repeat(indentation - precedingCharacters.length % indentation);
};

export default f;
