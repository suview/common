/**
 *
 */

type T = (reference: number) => (value: number) => boolean;

const f: T = reference => value => value >= reference;

export default f;
