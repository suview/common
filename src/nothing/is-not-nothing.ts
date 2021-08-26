/**
 *
 */

type T = (value: unknown) => boolean;

const f: T = value => value !== undefined && value !== null;

export default f;
