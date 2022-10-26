/**
 *
 */

type T = (separator: string) => (array: string[]) => string;

const f: T = separator => array => array.join(separator);

export default f;
