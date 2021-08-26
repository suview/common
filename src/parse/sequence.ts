import Parser from './type/parser';
import Result from './type/result';

type Sequence2 = <A, B>(parsers: [Parser<A>, Parser<B>]) => Parser<[Result<A>?, Result<B>?]>;

const sequence2: Sequence2 = <A, B>(parsers: [Parser<A>, Parser<B>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    return {
        match: [
            result1,
            ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
        ],
        ...(result2.expected ? { expected: result2.expected } : {}),
        position: { start: cursor, end: result2.position.end }
    };
};

type Sequence3 = <A, B, C>(parsers: [Parser<A>, Parser<B>, Parser<C>]) => Parser<[Result<A>?, Result<B>?, Result<C>?]>;

const sequence3: Sequence3 = <A, B, C>(parsers: [Parser<A>, Parser<B>, Parser<C>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    return {
        match: [
            result1,
            result2,
            ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
        ],
        ...(result3.expected ? { expected: result3.expected } : {}),
        position: { start: cursor, end: result3.position.end }
    };
};

type Sequence4 = <A, B, C, D>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?]>;

const sequence4: Sequence4 = <A, B, C, D>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
        ],
        ...(result4.expected ? { expected: result4.expected } : {}),
        position: { start: cursor, end: result4.position.end }
    };
};

type Sequence5 = <A, B, C, D, E>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?]>;

const sequence5: Sequence5 = <A, B, C, D, E>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
        ],
        ...(result5.expected ? { expected: result5.expected } : {}),
        position: { start: cursor, end: result5.position.end }
    };
};

type Sequence6 = <A, B, C, D, E, F>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?]>;

const sequence6: Sequence6 = <A, B, C, D, E, F>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
        ],
        ...(result6.expected ? { expected: result6.expected } : {}),
        position: { start: cursor, end: result6.position.end }
    };
};

type Sequence7 = <A, B, C, D, E, F, G>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?]>;

const sequence7: Sequence7 = <A, B, C, D, E, F, G>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
        ],
        ...(result7.expected ? { expected: result7.expected } : {}),
        position: { start: cursor, end: result7.position.end }
    };
};

type Sequence8 = <A, B, C, D, E, F, G, H>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?]>;

const sequence8: Sequence8 = <A, B, C, D, E, F, G, H>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
        ],
        ...(result8.expected ? { expected: result8.expected } : {}),
        position: { start: cursor, end: result8.position.end }
    };
};

type Sequence9 = <A, B, C, D, E, F, G, H, I>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?]>;

const sequence9: Sequence9 = <A, B, C, D, E, F, G, H, I>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
        ],
        ...(result9.expected ? { expected: result9.expected } : {}),
        position: { start: cursor, end: result9.position.end }
    };
};

type Sequence10 = <A, B, C, D, E, F, G, H, I, J>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?, Result<J>?]>;

const sequence10: Sequence10 = <A, B, C, D, E, F, G, H, I, J>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    if (result9.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
            ],
            expected: result9.expected,
            position: { start: cursor, end: result9.position.end }
        };
    }

    const result10 = parsers[9](source, result9.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            result9,
            ...(result10.match === undefined ? [] as [] : [result10] as [Result<J>])
        ],
        ...(result10.expected ? { expected: result10.expected } : {}),
        position: { start: cursor, end: result10.position.end }
    };
};

type Sequence11 = <A, B, C, D, E, F, G, H, I, J, K>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?, Result<J>?, Result<K>?]>;

const sequence11: Sequence11 = <A, B, C, D, E, F, G, H, I, J, K>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    if (result9.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
            ],
            expected: result9.expected,
            position: { start: cursor, end: result9.position.end }
        };
    }

    const result10 = parsers[9](source, result9.position.end);

    if (result10.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                ...(result10.match === undefined ? [] as [] : [result10] as [Result<J>])
            ],
            expected: result10.expected,
            position: { start: cursor, end: result10.position.end }
        };
    }

    const result11 = parsers[10](source, result10.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            result9,
            result10,
            ...(result11.match === undefined ? [] as [] : [result11] as [Result<K>])
        ],
        ...(result11.expected ? { expected: result11.expected } : {}),
        position: { start: cursor, end: result11.position.end }
    };
};

type Sequence12 = <A, B, C, D, E, F, G, H, I, J, K, L>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?, Result<J>?, Result<K>?, Result<L>?]>;

const sequence12: Sequence12 = <A, B, C, D, E, F, G, H, I, J, K, L>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    if (result9.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
            ],
            expected: result9.expected,
            position: { start: cursor, end: result9.position.end }
        };
    }

    const result10 = parsers[9](source, result9.position.end);

    if (result10.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                ...(result10.match === undefined ? [] as [] : [result10] as [Result<J>])
            ],
            expected: result10.expected,
            position: { start: cursor, end: result10.position.end }
        };
    }

    const result11 = parsers[10](source, result10.position.end);

    if (result11.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                ...(result11.match === undefined ? [] as [] : [result11] as [Result<K>])
            ],
            expected: result11.expected,
            position: { start: cursor, end: result11.position.end }
        };
    }

    const result12 = parsers[11](source, result11.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            result9,
            result10,
            result11,
            ...(result12.match === undefined ? [] as [] : [result12] as [Result<L>])
        ],
        ...(result12.expected ? { expected: result12.expected } : {}),
        position: { start: cursor, end: result12.position.end }
    };
};

type Sequence13 = <A, B, C, D, E, F, G, H, I, J, K, L, M>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?, Result<J>?, Result<K>?, Result<L>?, Result<M>?]>;

const sequence13: Sequence13 = <A, B, C, D, E, F, G, H, I, J, K, L, M>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    if (result9.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
            ],
            expected: result9.expected,
            position: { start: cursor, end: result9.position.end }
        };
    }

    const result10 = parsers[9](source, result9.position.end);

    if (result10.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                ...(result10.match === undefined ? [] as [] : [result10] as [Result<J>])
            ],
            expected: result10.expected,
            position: { start: cursor, end: result10.position.end }
        };
    }

    const result11 = parsers[10](source, result10.position.end);

    if (result11.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                ...(result11.match === undefined ? [] as [] : [result11] as [Result<K>])
            ],
            expected: result11.expected,
            position: { start: cursor, end: result11.position.end }
        };
    }

    const result12 = parsers[11](source, result11.position.end);

    if (result12.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                ...(result12.match === undefined ? [] as [] : [result12] as [Result<L>])
            ],
            expected: result12.expected,
            position: { start: cursor, end: result12.position.end }
        };
    }

    const result13 = parsers[12](source, result12.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            result9,
            result10,
            result11,
            result12,
            ...(result13.match === undefined ? [] as [] : [result13] as [Result<M>])
        ],
        ...(result13.expected ? { expected: result13.expected } : {}),
        position: { start: cursor, end: result13.position.end }
    };
};

type Sequence14 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?, Result<J>?, Result<K>?, Result<L>?, Result<M>?, Result<N>?]>;

const sequence14: Sequence14 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    if (result9.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
            ],
            expected: result9.expected,
            position: { start: cursor, end: result9.position.end }
        };
    }

    const result10 = parsers[9](source, result9.position.end);

    if (result10.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                ...(result10.match === undefined ? [] as [] : [result10] as [Result<J>])
            ],
            expected: result10.expected,
            position: { start: cursor, end: result10.position.end }
        };
    }

    const result11 = parsers[10](source, result10.position.end);

    if (result11.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                ...(result11.match === undefined ? [] as [] : [result11] as [Result<K>])
            ],
            expected: result11.expected,
            position: { start: cursor, end: result11.position.end }
        };
    }

    const result12 = parsers[11](source, result11.position.end);

    if (result12.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                ...(result12.match === undefined ? [] as [] : [result12] as [Result<L>])
            ],
            expected: result12.expected,
            position: { start: cursor, end: result12.position.end }
        };
    }

    const result13 = parsers[12](source, result12.position.end);

    if (result13.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                ...(result13.match === undefined ? [] as [] : [result13] as [Result<M>])
            ],
            expected: result13.expected,
            position: { start: cursor, end: result13.position.end }
        };
    }

    const result14 = parsers[13](source, result13.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            result9,
            result10,
            result11,
            result12,
            result13,
            ...(result14.match === undefined ? [] as [] : [result14] as [Result<N>])
        ],
        ...(result14.expected ? { expected: result14.expected } : {}),
        position: { start: cursor, end: result14.position.end }
    };
};

type Sequence15 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?, Result<J>?, Result<K>?, Result<L>?, Result<M>?, Result<N>?, Result<O>?]>;

const sequence15: Sequence15 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    if (result9.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
            ],
            expected: result9.expected,
            position: { start: cursor, end: result9.position.end }
        };
    }

    const result10 = parsers[9](source, result9.position.end);

    if (result10.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                ...(result10.match === undefined ? [] as [] : [result10] as [Result<J>])
            ],
            expected: result10.expected,
            position: { start: cursor, end: result10.position.end }
        };
    }

    const result11 = parsers[10](source, result10.position.end);

    if (result11.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                ...(result11.match === undefined ? [] as [] : [result11] as [Result<K>])
            ],
            expected: result11.expected,
            position: { start: cursor, end: result11.position.end }
        };
    }

    const result12 = parsers[11](source, result11.position.end);

    if (result12.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                ...(result12.match === undefined ? [] as [] : [result12] as [Result<L>])
            ],
            expected: result12.expected,
            position: { start: cursor, end: result12.position.end }
        };
    }

    const result13 = parsers[12](source, result12.position.end);

    if (result13.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                ...(result13.match === undefined ? [] as [] : [result13] as [Result<M>])
            ],
            expected: result13.expected,
            position: { start: cursor, end: result13.position.end }
        };
    }

    const result14 = parsers[13](source, result13.position.end);

    if (result14.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                ...(result14.match === undefined ? [] as [] : [result14] as [Result<N>])
            ],
            expected: result14.expected,
            position: { start: cursor, end: result14.position.end }
        };
    }

    const result15 = parsers[14](source, result14.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            result9,
            result10,
            result11,
            result12,
            result13,
            result14,
            ...(result15.match === undefined ? [] as [] : [result15] as [Result<O>])
        ],
        ...(result15.expected ? { expected: result15.expected } : {}),
        position: { start: cursor, end: result15.position.end }
    };
};

type Sequence16 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>, Parser<P>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?, Result<J>?, Result<K>?, Result<L>?, Result<M>?, Result<N>?, Result<O>?, Result<P>?]>;

const sequence16: Sequence16 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>, Parser<P>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    if (result9.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
            ],
            expected: result9.expected,
            position: { start: cursor, end: result9.position.end }
        };
    }

    const result10 = parsers[9](source, result9.position.end);

    if (result10.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                ...(result10.match === undefined ? [] as [] : [result10] as [Result<J>])
            ],
            expected: result10.expected,
            position: { start: cursor, end: result10.position.end }
        };
    }

    const result11 = parsers[10](source, result10.position.end);

    if (result11.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                ...(result11.match === undefined ? [] as [] : [result11] as [Result<K>])
            ],
            expected: result11.expected,
            position: { start: cursor, end: result11.position.end }
        };
    }

    const result12 = parsers[11](source, result11.position.end);

    if (result12.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                ...(result12.match === undefined ? [] as [] : [result12] as [Result<L>])
            ],
            expected: result12.expected,
            position: { start: cursor, end: result12.position.end }
        };
    }

    const result13 = parsers[12](source, result12.position.end);

    if (result13.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                ...(result13.match === undefined ? [] as [] : [result13] as [Result<M>])
            ],
            expected: result13.expected,
            position: { start: cursor, end: result13.position.end }
        };
    }

    const result14 = parsers[13](source, result13.position.end);

    if (result14.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                ...(result14.match === undefined ? [] as [] : [result14] as [Result<N>])
            ],
            expected: result14.expected,
            position: { start: cursor, end: result14.position.end }
        };
    }

    const result15 = parsers[14](source, result14.position.end);

    if (result15.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                ...(result15.match === undefined ? [] as [] : [result15] as [Result<O>])
            ],
            expected: result15.expected,
            position: { start: cursor, end: result15.position.end }
        };
    }

    const result16 = parsers[15](source, result15.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            result9,
            result10,
            result11,
            result12,
            result13,
            result14,
            result15,
            ...(result16.match === undefined ? [] as [] : [result16] as [Result<P>])
        ],
        ...(result16.expected ? { expected: result16.expected } : {}),
        position: { start: cursor, end: result16.position.end }
    };
};

type Sequence17 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>, Parser<P>, Parser<Q>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?, Result<J>?, Result<K>?, Result<L>?, Result<M>?, Result<N>?, Result<O>?, Result<P>?, Result<Q>?]>;

const sequence17: Sequence17 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>, Parser<P>, Parser<Q>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    if (result9.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
            ],
            expected: result9.expected,
            position: { start: cursor, end: result9.position.end }
        };
    }

    const result10 = parsers[9](source, result9.position.end);

    if (result10.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                ...(result10.match === undefined ? [] as [] : [result10] as [Result<J>])
            ],
            expected: result10.expected,
            position: { start: cursor, end: result10.position.end }
        };
    }

    const result11 = parsers[10](source, result10.position.end);

    if (result11.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                ...(result11.match === undefined ? [] as [] : [result11] as [Result<K>])
            ],
            expected: result11.expected,
            position: { start: cursor, end: result11.position.end }
        };
    }

    const result12 = parsers[11](source, result11.position.end);

    if (result12.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                ...(result12.match === undefined ? [] as [] : [result12] as [Result<L>])
            ],
            expected: result12.expected,
            position: { start: cursor, end: result12.position.end }
        };
    }

    const result13 = parsers[12](source, result12.position.end);

    if (result13.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                ...(result13.match === undefined ? [] as [] : [result13] as [Result<M>])
            ],
            expected: result13.expected,
            position: { start: cursor, end: result13.position.end }
        };
    }

    const result14 = parsers[13](source, result13.position.end);

    if (result14.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                ...(result14.match === undefined ? [] as [] : [result14] as [Result<N>])
            ],
            expected: result14.expected,
            position: { start: cursor, end: result14.position.end }
        };
    }

    const result15 = parsers[14](source, result14.position.end);

    if (result15.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                ...(result15.match === undefined ? [] as [] : [result15] as [Result<O>])
            ],
            expected: result15.expected,
            position: { start: cursor, end: result15.position.end }
        };
    }

    const result16 = parsers[15](source, result15.position.end);

    if (result16.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                result15,
                ...(result16.match === undefined ? [] as [] : [result16] as [Result<P>])
            ],
            expected: result16.expected,
            position: { start: cursor, end: result16.position.end }
        };
    }

    const result17 = parsers[16](source, result16.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            result9,
            result10,
            result11,
            result12,
            result13,
            result14,
            result15,
            result16,
            ...(result17.match === undefined ? [] as [] : [result17] as [Result<Q>])
        ],
        ...(result17.expected ? { expected: result17.expected } : {}),
        position: { start: cursor, end: result17.position.end }
    };
};

type Sequence18 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>, Parser<P>, Parser<Q>, Parser<R>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?, Result<J>?, Result<K>?, Result<L>?, Result<M>?, Result<N>?, Result<O>?, Result<P>?, Result<Q>?, Result<R>?]>;

const sequence18: Sequence18 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>, Parser<P>, Parser<Q>, Parser<R>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    if (result9.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
            ],
            expected: result9.expected,
            position: { start: cursor, end: result9.position.end }
        };
    }

    const result10 = parsers[9](source, result9.position.end);

    if (result10.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                ...(result10.match === undefined ? [] as [] : [result10] as [Result<J>])
            ],
            expected: result10.expected,
            position: { start: cursor, end: result10.position.end }
        };
    }

    const result11 = parsers[10](source, result10.position.end);

    if (result11.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                ...(result11.match === undefined ? [] as [] : [result11] as [Result<K>])
            ],
            expected: result11.expected,
            position: { start: cursor, end: result11.position.end }
        };
    }

    const result12 = parsers[11](source, result11.position.end);

    if (result12.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                ...(result12.match === undefined ? [] as [] : [result12] as [Result<L>])
            ],
            expected: result12.expected,
            position: { start: cursor, end: result12.position.end }
        };
    }

    const result13 = parsers[12](source, result12.position.end);

    if (result13.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                ...(result13.match === undefined ? [] as [] : [result13] as [Result<M>])
            ],
            expected: result13.expected,
            position: { start: cursor, end: result13.position.end }
        };
    }

    const result14 = parsers[13](source, result13.position.end);

    if (result14.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                ...(result14.match === undefined ? [] as [] : [result14] as [Result<N>])
            ],
            expected: result14.expected,
            position: { start: cursor, end: result14.position.end }
        };
    }

    const result15 = parsers[14](source, result14.position.end);

    if (result15.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                ...(result15.match === undefined ? [] as [] : [result15] as [Result<O>])
            ],
            expected: result15.expected,
            position: { start: cursor, end: result15.position.end }
        };
    }

    const result16 = parsers[15](source, result15.position.end);

    if (result16.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                result15,
                ...(result16.match === undefined ? [] as [] : [result16] as [Result<P>])
            ],
            expected: result16.expected,
            position: { start: cursor, end: result16.position.end }
        };
    }

    const result17 = parsers[16](source, result16.position.end);

    if (result17.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                result15,
                result16,
                ...(result17.match === undefined ? [] as [] : [result17] as [Result<Q>])
            ],
            expected: result17.expected,
            position: { start: cursor, end: result17.position.end }
        };
    }

    const result18 = parsers[17](source, result17.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            result9,
            result10,
            result11,
            result12,
            result13,
            result14,
            result15,
            result16,
            result17,
            ...(result18.match === undefined ? [] as [] : [result18] as [Result<R>])
        ],
        ...(result18.expected ? { expected: result18.expected } : {}),
        position: { start: cursor, end: result18.position.end }
    };
};

type Sequence19 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>, Parser<P>, Parser<Q>, Parser<R>, Parser<S>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?, Result<J>?, Result<K>?, Result<L>?, Result<M>?, Result<N>?, Result<O>?, Result<P>?, Result<Q>?, Result<R>?, Result<S>?]>;

const sequence19: Sequence19 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>, Parser<P>, Parser<Q>, Parser<R>, Parser<S>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    if (result9.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
            ],
            expected: result9.expected,
            position: { start: cursor, end: result9.position.end }
        };
    }

    const result10 = parsers[9](source, result9.position.end);

    if (result10.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                ...(result10.match === undefined ? [] as [] : [result10] as [Result<J>])
            ],
            expected: result10.expected,
            position: { start: cursor, end: result10.position.end }
        };
    }

    const result11 = parsers[10](source, result10.position.end);

    if (result11.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                ...(result11.match === undefined ? [] as [] : [result11] as [Result<K>])
            ],
            expected: result11.expected,
            position: { start: cursor, end: result11.position.end }
        };
    }

    const result12 = parsers[11](source, result11.position.end);

    if (result12.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                ...(result12.match === undefined ? [] as [] : [result12] as [Result<L>])
            ],
            expected: result12.expected,
            position: { start: cursor, end: result12.position.end }
        };
    }

    const result13 = parsers[12](source, result12.position.end);

    if (result13.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                ...(result13.match === undefined ? [] as [] : [result13] as [Result<M>])
            ],
            expected: result13.expected,
            position: { start: cursor, end: result13.position.end }
        };
    }

    const result14 = parsers[13](source, result13.position.end);

    if (result14.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                ...(result14.match === undefined ? [] as [] : [result14] as [Result<N>])
            ],
            expected: result14.expected,
            position: { start: cursor, end: result14.position.end }
        };
    }

    const result15 = parsers[14](source, result14.position.end);

    if (result15.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                ...(result15.match === undefined ? [] as [] : [result15] as [Result<O>])
            ],
            expected: result15.expected,
            position: { start: cursor, end: result15.position.end }
        };
    }

    const result16 = parsers[15](source, result15.position.end);

    if (result16.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                result15,
                ...(result16.match === undefined ? [] as [] : [result16] as [Result<P>])
            ],
            expected: result16.expected,
            position: { start: cursor, end: result16.position.end }
        };
    }

    const result17 = parsers[16](source, result16.position.end);

    if (result17.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                result15,
                result16,
                ...(result17.match === undefined ? [] as [] : [result17] as [Result<Q>])
            ],
            expected: result17.expected,
            position: { start: cursor, end: result17.position.end }
        };
    }

    const result18 = parsers[17](source, result17.position.end);

    if (result18.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                result15,
                result16,
                result17,
                ...(result18.match === undefined ? [] as [] : [result18] as [Result<R>])
            ],
            expected: result18.expected,
            position: { start: cursor, end: result18.position.end }
        };
    }

    const result19 = parsers[18](source, result18.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            result9,
            result10,
            result11,
            result12,
            result13,
            result14,
            result15,
            result16,
            result17,
            result18,
            ...(result19.match === undefined ? [] as [] : [result19] as [Result<S>])
        ],
        ...(result19.expected ? { expected: result19.expected } : {}),
        position: { start: cursor, end: result19.position.end }
    };
};

type Sequence20 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>, Parser<P>, Parser<Q>, Parser<R>, Parser<S>, Parser<T>]) => Parser<[Result<A>?, Result<B>?, Result<C>?, Result<D>?, Result<E>?, Result<F>?, Result<G>?, Result<H>?, Result<I>?, Result<J>?, Result<K>?, Result<L>?, Result<M>?, Result<N>?, Result<O>?, Result<P>?, Result<Q>?, Result<R>?, Result<S>?, Result<T>?]>;

const sequence20: Sequence20 = <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(parsers: [Parser<A>, Parser<B>, Parser<C>, Parser<D>, Parser<E>, Parser<F>, Parser<G>, Parser<H>, Parser<I>, Parser<J>, Parser<K>, Parser<L>, Parser<M>, Parser<N>, Parser<O>, Parser<P>, Parser<Q>, Parser<R>, Parser<S>, Parser<T>]) => (source, cursor) => {
    const result1 = parsers[0](source, cursor);

    if (result1.expected) {
        return {
            expected: result1.expected,
            position: result1.position,
            ...(result1.match === undefined ? {} : { match: [result1] })
        };
    }

    const result2 = parsers[1](source, result1.position.end);

    if (result2.expected) {
        return {
            match: [
                result1,
                ...(result2.match === undefined ? [] as [] : [result2] as [Result<B>])
            ],
            expected: result2.expected,
            position: { start: cursor, end: result2.position.end }
        };
    }

    const result3 = parsers[2](source, result2.position.end);

    if (result3.expected) {
        return {
            match: [
                result1,
                result2,
                ...(result3.match === undefined ? [] as [] : [result3] as [Result<C>])
            ],
            expected: result3.expected,
            position: { start: cursor, end: result3.position.end }
        };
    }

    const result4 = parsers[3](source, result3.position.end);

    if (result4.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                ...(result4.match === undefined ? [] as [] : [result4] as [Result<D>])
            ],
            expected: result4.expected,
            position: { start: cursor, end: result4.position.end }
        };
    }

    const result5 = parsers[4](source, result4.position.end);

    if (result5.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                ...(result5.match === undefined ? [] as [] : [result5] as [Result<E>])
            ],
            expected: result5.expected,
            position: { start: cursor, end: result5.position.end }
        };
    }

    const result6 = parsers[5](source, result5.position.end);

    if (result6.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                ...(result6.match === undefined ? [] as [] : [result6] as [Result<F>])
            ],
            expected: result6.expected,
            position: { start: cursor, end: result6.position.end }
        };
    }

    const result7 = parsers[6](source, result6.position.end);

    if (result7.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                ...(result7.match === undefined ? [] as [] : [result7] as [Result<G>])
            ],
            expected: result7.expected,
            position: { start: cursor, end: result7.position.end }
        };
    }

    const result8 = parsers[7](source, result7.position.end);

    if (result8.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                ...(result8.match === undefined ? [] as [] : [result8] as [Result<H>])
            ],
            expected: result8.expected,
            position: { start: cursor, end: result8.position.end }
        };
    }

    const result9 = parsers[8](source, result8.position.end);

    if (result9.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                ...(result9.match === undefined ? [] as [] : [result9] as [Result<I>])
            ],
            expected: result9.expected,
            position: { start: cursor, end: result9.position.end }
        };
    }

    const result10 = parsers[9](source, result9.position.end);

    if (result10.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                ...(result10.match === undefined ? [] as [] : [result10] as [Result<J>])
            ],
            expected: result10.expected,
            position: { start: cursor, end: result10.position.end }
        };
    }

    const result11 = parsers[10](source, result10.position.end);

    if (result11.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                ...(result11.match === undefined ? [] as [] : [result11] as [Result<K>])
            ],
            expected: result11.expected,
            position: { start: cursor, end: result11.position.end }
        };
    }

    const result12 = parsers[11](source, result11.position.end);

    if (result12.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                ...(result12.match === undefined ? [] as [] : [result12] as [Result<L>])
            ],
            expected: result12.expected,
            position: { start: cursor, end: result12.position.end }
        };
    }

    const result13 = parsers[12](source, result12.position.end);

    if (result13.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                ...(result13.match === undefined ? [] as [] : [result13] as [Result<M>])
            ],
            expected: result13.expected,
            position: { start: cursor, end: result13.position.end }
        };
    }

    const result14 = parsers[13](source, result13.position.end);

    if (result14.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                ...(result14.match === undefined ? [] as [] : [result14] as [Result<N>])
            ],
            expected: result14.expected,
            position: { start: cursor, end: result14.position.end }
        };
    }

    const result15 = parsers[14](source, result14.position.end);

    if (result15.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                ...(result15.match === undefined ? [] as [] : [result15] as [Result<O>])
            ],
            expected: result15.expected,
            position: { start: cursor, end: result15.position.end }
        };
    }

    const result16 = parsers[15](source, result15.position.end);

    if (result16.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                result15,
                ...(result16.match === undefined ? [] as [] : [result16] as [Result<P>])
            ],
            expected: result16.expected,
            position: { start: cursor, end: result16.position.end }
        };
    }

    const result17 = parsers[16](source, result16.position.end);

    if (result17.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                result15,
                result16,
                ...(result17.match === undefined ? [] as [] : [result17] as [Result<Q>])
            ],
            expected: result17.expected,
            position: { start: cursor, end: result17.position.end }
        };
    }

    const result18 = parsers[17](source, result17.position.end);

    if (result18.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                result15,
                result16,
                result17,
                ...(result18.match === undefined ? [] as [] : [result18] as [Result<R>])
            ],
            expected: result18.expected,
            position: { start: cursor, end: result18.position.end }
        };
    }

    const result19 = parsers[18](source, result18.position.end);

    if (result19.expected) {
        return {
            match: [
                result1,
                result2,
                result3,
                result4,
                result5,
                result6,
                result7,
                result8,
                result9,
                result10,
                result11,
                result12,
                result13,
                result14,
                result15,
                result16,
                result17,
                result18,
                ...(result19.match === undefined ? [] as [] : [result19] as [Result<S>])
            ],
            expected: result19.expected,
            position: { start: cursor, end: result19.position.end }
        };
    }

    const result20 = parsers[19](source, result19.position.end);

    return {
        match: [
            result1,
            result2,
            result3,
            result4,
            result5,
            result6,
            result7,
            result8,
            result9,
            result10,
            result11,
            result12,
            result13,
            result14,
            result15,
            result16,
            result17,
            result18,
            result19,
            ...(result20.match === undefined ? [] as [] : [result20] as [Result<T>])
        ],
        ...(result20.expected ? { expected: result20.expected } : {}),
        position: { start: cursor, end: result20.position.end }
    };
};

export {
    sequence2,
    sequence3,
    sequence4,
    sequence5,
    sequence6,
    sequence7,
    sequence8,
    sequence9,
    sequence10,
    sequence11,
    sequence12,
    sequence13,
    sequence14,
    sequence15,
    sequence16,
    sequence17,
    sequence18,
    sequence19,
    sequence20
};
