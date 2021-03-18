/**
 *
 */

type T = (description?: string) => string;

const f: T = description => {
    if (description === 'top') return 'start';
    if (description === 'bottom') return 'end';
    if (description === 'left') return 'start';
    if (description === 'right') return 'end';
    return 'center';
};

export default f;
