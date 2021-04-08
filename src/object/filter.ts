/**
 *
 */

type T = <A extends unknown>(predicate: (value: A) => boolean) => (value: Record<string, A>) => Record<string, A>;

const f: T = predicate => value => Object.fromEntries(
    Object.entries(value).filter(keyValue => predicate(keyValue[1]))
);

export default f;
