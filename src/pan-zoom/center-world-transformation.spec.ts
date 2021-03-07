import centerWorldTransformation from './center-world-transformation';

describe('panZoom/centerWorldTransformation', () => {
    it('returns transformation which centers the world', () => {
        const worldSize = [1000, 500];
        const expectedResult = [500, 250];

        expect(centerWorldTransformation(worldSize)).toEqual(expectedResult);
    });
});
