import containsOnly from './contains-only';

describe('array/containsOnly', () => {
    it('returns true if single value matches target', () => {
        const target = 3;
        const values = [3];

        expect(containsOnly (target) (values)).toEqual(true);
    });

    it('returns false if single value does not match target', () => {
        const target = 3;
        const values = [4];

        expect(containsOnly (target) (values)).toEqual(false);
    });

    it('returns true if all values match target', () => {
        const target = 3;
        const values = [3, 3, 3, 3];

        expect(containsOnly (target) (values)).toEqual(true);
    });

    it('returns false if all values do not match target', () => {
        const target = 3;
        const values = [1, 2, 4, 5];

        expect(containsOnly (target) (values)).toEqual(false);
    });

    it('returns false if any value does not match target', () => {
        const target = 3;
        const values = [3, 3, 1, 3, 3];

        expect(containsOnly (target) (values)).toEqual(false);
    });
});
