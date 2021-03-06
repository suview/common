import arnParts from './arn-parts';

describe('aws/arn-parts', () => {
    it('returns service from ARN', () => {
        const arn = 'arn:aws:s3:::example-bucket';

        expect(arnParts(arn).service).toEqual('s3');
    });

    it('returns resource from ARN', () => {
        const arn = 'arn:aws:lambda:::function:example-function';

        expect(arnParts(arn).resource).toEqual('function:example-function');
    });

    it('returns region from ARN when it is specified', () => {
        const arn = 'arn:aws:s3:us-east-1::example-bucket';

        expect(arnParts(arn).region).toEqual('us-east-1');
    });

    it('returns undefined as region from ARN when it is not specified', () => {
        const arn = 'arn:aws:s3:::example-bucket';

        expect(arnParts(arn).region).toEqual(undefined);
    });

    it('returns accountId from ARN when it is specified', () => {
        const arn = 'arn:aws:s3::776861773350:example-bucket';

        expect(arnParts(arn).accountId).toEqual('776861773350');
    });

    it('returns undefined as accountId from ARN when it is not specified', () => {
        const arn = 'arn:aws:s3:::example-bucket';

        expect(arnParts(arn).accountId).toEqual(undefined);
    });

    it('errors when ARN is invalid', () => {
        const arn = 'arnaws:s3:::missing-colon-at-beginning';
        const expectedError = new Error('Invalid ARN (arnaws:s3:::missing-colon-at-beginning)');

        expect(() => arnParts(arn)).toThrow(expectedError);
    });
});
