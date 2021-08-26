/**
 *
 */

import Parser from './type/parser';
import regex from './regex';

type T = Parser<string>;

const f: T = regex(/\s+/, 'whitespace');

export default f;
