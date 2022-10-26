/**
 *
 */

type T = (first: string) => (second: string) => string;

const f: T = first => second => `${first}${second}`;

export default f;
