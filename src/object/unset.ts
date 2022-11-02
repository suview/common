/**
 *
 */

import { Object } from 'ts-toolbelt';
import clone from './clone';

type T = <A extends string, B extends Record<string, unknown>>(property: A) => (obj: B) => Object.Omit<B, A>;

const f: T = property => obj => {
    const cloned = clone(obj);
    delete cloned[property];
    return cloned as unknown as Object.Omit<typeof obj, typeof property>;
};

export default f;
