import regionFromArn from './region-from-arn';

describe('aws/region-from-arn', () => {
    it('returns region from ARN when specified', () => {
        const arn = 'arn:aws:s3:us-east-1::example-bucket';

        expect(regionFromArn(arn)).toEqual('us-east-1');
    });

    it('returns undefined from ARN when region is not specified', () => {
        const arn = 'arn:aws:s3:::example-bucket';

        expect(regionFromArn(arn)).toEqual(undefined);
    });

    it('errors when ARN is invalid', () => {
        const arn = 'arnaws:s3:::missing-colon-at-beginning';
        const expectedError = new Error('Invalid ARN (arnaws:s3:::missing-colon-at-beginning)');

        expect(() => regionFromArn(arn)).toThrow(expectedError);
    });
});
