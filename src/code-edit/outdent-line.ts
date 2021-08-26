/**
 *
 */

import Indentation from './type/indentation';

type T = (indentation: Indentation, line: string) => string;

const f: T = (indentation, line) => {
    if (indentation === 'tab') return line.replace(/^\t/, '');
    return line.replace(/^ */, spaces => {
        // TODO Rounding should be its own function...
        const lengthRequired = Math.floor((spaces.length - 1) / indentation) * indentation;
        return (lengthRequired >= 0) ? ' '.repeat(lengthRequired) : '';
    });
};

export default f;
