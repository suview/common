/**
 *
 */

type T = <A extends string, B, C extends Record<string, unknown>>(key: A) => (value: B) => (obj: C) => C & { [x in A]: B };

const f: T = key => value => obj => ({
    ...obj,
    [key]: value
});

export default f;
