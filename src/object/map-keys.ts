/**
 *
 */

type Callback<A extends unknown> = (key: string) => (value: A, obj: Record<string, A>) => string;
type T = <A extends unknown>(callback: Callback<A>) => (obj: Record<string, A>) => Record<string, A>;

const f: T = callback => obj => {
    // TODO Should use pipe syntax when a few
    // other functions exist (eg map, values, call)
    type A = Parameters<ReturnType<typeof callback>>[0];
    const returnObj: Record<string, A> = {};
    Object.keys(obj).forEach(key => {
        const newKey = callback (key) (obj[key]!, obj);
        returnObj[newKey] = obj[key]!;
    });
    return returnObj;
};

export default f;
