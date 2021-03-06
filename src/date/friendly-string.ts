/**
 * Formats a date as a friendly string
 *
 * @remarks
 * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
 *
 * @param date - The first input number
 * @param y - The second input number
 * @returns The arithmetic mean of `x` and `y`
 *
 * @beta
 */

import { format } from 'date-fns/fp';

type T = (date: Date) => string;

const f: T = format('do MMMM y');

export default f;
