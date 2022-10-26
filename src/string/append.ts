/**
 *
 */

type T = (suffix: string) => (value: string) => string;

const f: T = suffix => value => `${value}${suffix}`;

export default f;
