/**
 *
 */

type T = (value: unknown) => boolean;

const f: T = (value) => Array.isArray(value);

export default f;
