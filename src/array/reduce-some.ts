/**
 *
 */

type Predicate<A> = (x: A) => boolean;
type Callback<A> = (first: A, second: A) => A;

type T = <A>(predicate: Predicate<A>) => (callback: Callback<A>) => (initialValue: A) => (data: A[]) => A[];

// TODO This could be much more functional when some other functions exist
const f: T = predicate => callback => initialValue => data => {
    const output: typeof data = [];
    for (let i = 0; i < data.length; i += 1) {
        let nonMatchIndex = data.slice(i).findIndex(x => !predicate(x));
        if (nonMatchIndex === -1) nonMatchIndex = data.slice(i).length;
        if (nonMatchIndex + i === i) {
            output.push(data[i]);
        } else {
            const matches = data.slice(i, nonMatchIndex + i);
            const reduced = matches.reduce(callback, initialValue);
            output.push(reduced);
            i += matches.length - 1;
        }
    }
    return output;
};

export default f;
