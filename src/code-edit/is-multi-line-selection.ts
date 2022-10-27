/**
 *
 */

import Code from './type/code';
import contains from 'string/contains';

type T = (code: Code) => boolean;

const f: T = code => {
    const selection = code.source.substring(
        code.selection.start,
        code.selection.end
    );
    return contains ('\n') (selection);
};

export default f;
