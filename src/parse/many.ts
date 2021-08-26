/**
 *
 */

import Parser from './type/parser';
import Result from './type/result';
import Junk from './type/junk';
import reduceSome from '../array/reduce-some';
import last from '../array/last';

type T = <A>(recover: boolean, parser: Parser<A>) => Parser<Result<A | Junk>[]>;

const f: T = (recover, parser) => (source, cursor) => {
    const result = parser(source, cursor);

    if (result.expected && recover === false) {
        return {
            match: result.match ? [result] : undefined,
            expected: result.expected,
            position: result.position
        };
    }

    const nextIndex = (result.match === undefined && result.expected)
        ? result.position.end + 1
        : result.position.end;

    if (nextIndex > source.length) {
        return {
            match: result.match ? [result] : [],
            expected: result.expected,
            position: result.position
        };
    }

    const tail = f(recover, parser)(source, nextIndex);

    const allValues = [
        result,
        ...(tail.match || [])
    ];

    const allValuesWithExpandedJunkPositions = allValues.map(value => {
        if (value.match || !value.expected) return value;
        return {
            ...value,
            position: {
                start: value.position.start,
                end: value.position.end + 1
            }
        };
    });

    const allValuesWithReducedJunk = reduceSome(
        _result => {
            if (_result.match === undefined) return true;
            if ((_result.match as Junk)?.type === 'junk' && _result.expected) return true;
            return false;
        },
        (first, second) => ({
            match: {
                type: 'junk' as const,
                value: source.substring(
                    first.position?.start ?? second.position.start,
                    second.position.end
                )
            },
            expected: first.expected ?? second.expected,
            position: {
                start: first.position?.start ?? second.position.start,
                end: second.position.end
            }
        }),
        {} as Result<Junk>,
        allValuesWithExpandedJunkPositions
    );

    allValuesWithReducedJunk.forEach((value, index) => {
        if (index === 0) return;
        const previousValue = allValues[index - 1];
        if ((value.match as Junk)?.type === 'junk' && previousValue.expected) {
            allValuesWithReducedJunk[index].expected = previousValue.expected;
        }
    });

    return {
        match: allValuesWithReducedJunk,
        position: { start: cursor, end: tail.position.end },
        ...(last(allValuesWithReducedJunk)?.expected
            ? { expected: last(allValuesWithReducedJunk)?.expected }
            : {})
    };
};

export default f;
