/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';
import pipeValue from '../core/pipe-value';
import flags from './flags';
import toString from './flags-to-string';

type T = Curried<(global: boolean, regex: RegExp) => RegExp>;

const f: T = curry((global: boolean, regex: RegExp) => pipeValue(
    regex,
    flags,
    flagsObject => ({ // TODO Use object.setProp when available
        global,
        ignoreCase: flagsObject.ignoreCase,
        multiline: flagsObject.multiline
    }),
    toString,
    flagsString => new RegExp(regex.source, flagsString) // TODO Use object.construct when available
));

export default f;
