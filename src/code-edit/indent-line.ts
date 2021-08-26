/**
 *
 */

import Indentation from './type/indentation';
import indentationString from './indentation-string';
import explode from '../regex/explode';

type T = (indentation: Indentation, line: string) => string;

const f: T = (indentation, line) => {
    // TODO explode needs to be curried so
    // that this can be across multiple lines
    const { whitespace, content } = explode<{ whitespace: string, content: string }>(/^(\s*)(.*)/)(['whitespace', 'content'])(line);
    const newWhitespace = indentationString(indentation, whitespace);
    return whitespace + newWhitespace + content;
};

export default f;
