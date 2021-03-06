/**
 *
 */

type T = (delimiter: string, value: string) => string[];

const f: T = (delimiter, value) => value.split(delimiter);

export default f;
