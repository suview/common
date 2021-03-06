/**
 *
 */

type T = (value: unknown) => boolean;

const f: T = (value) => typeof value === 'string';

export default f;
