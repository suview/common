/**
 *
 */

import first from './first';
import last from './last';
import front from './front';
import tail from './tail';

type T = <A>(callback: (first: A, second: A) => A) => (data: A[][]) => A[];

const f: T = <A>(callback: (first: A, second: A) => A) => (data: A[][]) => {
    return data.reduce<A[]>((acc, next) => {
        if (!acc.length) return next;
        if (!next.length) return acc;

        return [
            ...front(acc),
            callback(
                last(acc) as A,
                first(next) as A
            ),
            ...tail(next)
        ];
    }, []);
};

export default f;
