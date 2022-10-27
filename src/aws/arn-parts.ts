/**
 *
 */

import Region from './type/region';
import explode from 'regex/explode';

interface ArnParts {
    service: string;
    resource: string;
    region?: Region;
    accountId?: string;
}

type T = (arn: string) => ArnParts;

const fn: T = (arn) => {
    const regex = /^arn:aws:([a-z0-9]+):([a-z0-9-]+)?:([0-9]{12})?:([a-z0-9-_:/]+)$/;
    try {
        return explode<ArnParts>(regex)(['service', 'region', 'accountId', 'resource'])(arn);
    } catch (error) {
        throw new Error(`Invalid ARN (${arn})`);
    }
};

export default fn;
