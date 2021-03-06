/**
 *
 */

type T = (value: string) => string;

const f: T = (value) => value.charAt(0).toUpperCase() + value.slice(1); // TODO use other tools in this library to make more readable

export default f;
