/**
 *
 */

import Dimensions from 'geometry/type/dimensions';
import Coordinates from 'geometry/type/coordinates';
import OrientationString from './type/orientation-string';
import orientationFromString from './orientation-from-string';
import pipeValue from 'core/pipe-value';
import map from 'array/map';
import reduce from 'array/reduce';
import max from 'number/max';
import add from 'math/add';
import mainDimension from './main-dimension';
import crossDimension from './cross-dimension';

type T = (orientation: OrientationString) => (gutter: number) => (boxes: Dimensions[]) => Coordinates[];

const f: T = orientation => gutter => boxes => {
    // TODO Could be broken down some more

    const { main, cross } = orientationFromString(orientation);

    const maxCrossDimension = pipeValue(
        boxes,
        map (crossDimension (main)),
        reduce (max) (0)
    );

    return boxes.map((box, index) => {
        const sizeOfPreviousBoxes = pipeValue(
            boxes.slice(0, index),
            map(mainDimension(main)),
            reduce (add) (0)
        );

        const mainOffset = sizeOfPreviousBoxes + gutter * index;

        let crossOffset = 0;
        if (cross !== 'start') crossOffset = maxCrossDimension - crossDimension (main) (box);
        if (cross === 'center') crossOffset /= 2;

        return {
            x: main === 'horizontal' ? mainOffset : crossOffset,
            y: main === 'vertical' ? mainOffset : crossOffset
        };
    });
};

export default f;
