/**
 *
 */

import Flags from './type/flags';

type T = (regex: RegExp) => Flags;

// TODO Use object.pick when it exists
const f: T = regex => ({
    global: regex.global,
    ignoreCase: regex.ignoreCase,
    multiline: regex.multiline
});

export default f;
