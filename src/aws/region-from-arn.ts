/**
 *
 */

import Region from './type/region';
import arnParts from './arn-parts';

type T = (arn: string) => Region | undefined;

const fn: T = (arn) => arnParts(arn).region;

export default fn;
