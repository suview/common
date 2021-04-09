/**
 *
 */

type Callback<A extends unknown, B extends unknown> = (value: A, key: string, obj: Record<string, A>) => B;
type T = <A extends unknown, B extends unknown>
    (callback: Callback<A, B>) => (obj: Record<string, A>) => Record<string, B>;

// TODO Ideally would not have to declare types
// on this line but B is needed within the function.
// Solutions for this would be appreciated.
const f: T = <A extends unknown, B extends unknown>(callback: Callback<A, B>) => (obj: Record<string, A>) => {
    // TODO Should use pipe syntax when a few
    // other functions exist (eg map, values, call)
    const returnObj: Record<string, B> = {};
    Object.keys(obj).forEach(key => {
        returnObj[key] = callback(obj[key], key, obj);
    });
    return returnObj;
};

export default f;
