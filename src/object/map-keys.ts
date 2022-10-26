/**
 *
 */

type Callback<A extends unknown> = (key: string) => (value: A, obj: Record<string, A>) => string;
type T = <A extends unknown>(callback: Callback<A>) => (obj: Record<string, A>) => Record<string, A>;

// TODO Ideally would not have to declare types
// on this line but B is needed within the function.
// Solutions for this would be appreciated.
const f: T = <A extends unknown>(callback: Callback<A>) => (obj: Record<string, A>) => {
    // TODO Should use pipe syntax when a few
    // other functions exist (eg map, values, call)
    const returnObj: Record<string, A> = {};
    Object.keys(obj).forEach(key => {
        const newKey = callback (key) (obj[key], obj);
        returnObj[newKey] = obj[key];
    });
    return returnObj;
};

export default f;
