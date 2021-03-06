/**
 *
 */

import arnParts from './arn-parts';

type T = (arn: string) => string;

const fn: T = (arn) => arnParts(arn).resource;

export default fn;
