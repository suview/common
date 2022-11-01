/**
 *
 */

import Flags from './type/flags';
import { pipe } from 'core';

type T = (flags: Flags) => string;

const f: T = pipe(
    flags => `
        ${flags.global ? 'g' : ''}
        ${flags.ignoreCase ? 'i' : ''}
        ${flags.multiline ? 'm' : ''}
    `,
    flagsString => flagsString.replace(/[\s\n]/g, '') // TODO Use string.replaceAll when available
);

export default f;
