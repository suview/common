/**
 *
 */

import Orientation from './type/orientation';
import Dimensions from 'geometry/type/dimensions';

type T = (layout: Orientation['main']) => (box: Dimensions) => number;

const f: T = layout => box => (layout === 'horizontal') ? box.width : box.height;

export default f;
