/**
 *
 */

import Parser from './type/parser';
import map from './map';
import many from './many';
import any from './any';
import whitespace from './whitespace';
import regex from './regex';

type T = Parser<string>;

const f: T = map(
    many(false, any([
        whitespace,
        regex(/\/\/[^\n]+/, 'single-line comment'),
        regex(/\/\*(?:.|\n)+\*\//, 'multi-line comment'),
    ])),
    (_, __, source) => source
);

export default f;
