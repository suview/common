/**
 *
 */

import Orientation from './type/orientation';
import OrientationString from './type/orientation-string';
import pipe from 'core/pipe';
import split from 'string/split';
import crossAxisPosition from './cross-axis-position';

type T = (orientationString: OrientationString) => Orientation;

const f: T = pipe(
    split(' '),
    // TODO This could be typed better - was
    // having problems presumably related to
    // https://github.com/millsp/ts-toolbelt/issues/207
    (arr: string[]) => ({
        main: arr[0] as Orientation['main'],
        cross: crossAxisPosition(arr[1]) as Orientation['cross']
    })
);

export default f;
