/**
 *
 */

import Parts from './type/parts';
import setGlobal from 'regex/set-global';
import split from './split';
import mapMultiple from 'array/map-multiple';
import concat from './concat';

type T = (delimiter: string | RegExp) => (value: string) => Parts;

const f: T = delimiter => value => {
    const suffixes = split (delimiter) (value);
    let prefixes: string[];

    if (delimiter instanceof RegExp) {
        const globalDelimiter = setGlobal (true) (delimiter);
        const match = value.match(globalDelimiter);
        prefixes = match ? [...match] : [];
    } else {
        prefixes = new Array(suffixes.length - 1).fill(delimiter); // TODO Replace when some array filling function exists
    }

    return mapMultiple (concat) (['', ...prefixes]) (suffixes);
};

export default f;
