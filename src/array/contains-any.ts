/**
 *
 */

import { equals } from 'core';

type T = <A>(target: A) => (values: A[]) => boolean;

const f: T = target => values => {
    return values.some(value => equals (value) (target));
};

export default f;
