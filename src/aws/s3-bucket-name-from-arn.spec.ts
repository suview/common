import s3BucketNameFromArn from './s3-bucket-name-from-arn';

describe('aws/s3-bucket-name-from-arn', () => {
    it('returns bucket name from ARN', () => {
        const arn = 'arn:aws:s3:::example-bucket';

        expect(s3BucketNameFromArn(arn)).toEqual('example-bucket');
    });

    it('errors when ARN is invalid', () => {
        const arn = 'arnaws:s3:::missing-colon-at-beginning';
        const expectedError = new Error('Invalid ARN (arnaws:s3:::missing-colon-at-beginning)');

        expect(() => s3BucketNameFromArn(arn)).toThrow(expectedError);
    });
});
