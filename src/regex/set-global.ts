/**
 *
 */

import pipeValue from '../core/pipe-value';
import flags from './flags';
import toString from './flags-to-string';

type T = (global: boolean) => (regex: RegExp) => RegExp;

const f: T = global => regex => pipeValue(
    regex,
    flags,
    flagsObject => ({ // TODO Use object.setProp when available
        global,
        ignoreCase: flagsObject.ignoreCase,
        multiline: flagsObject.multiline
    }),
    toString,
    flagsString => new RegExp(regex.source, flagsString) // TODO Use object.construct when available
);

export default f;
