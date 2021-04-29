import Helper from '@ember/component/helper';
import hasAccess from '../-private/has-access';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

class HasRole extends Helper
{
    @service acl;

    compute(roles, config)
    {
        config = JSON.parse(JSON.stringify(config));
        config.roles = config.roles
        if (roles || config.roles) {
            config.roles = A([...(roles || []), ...(config.roles || [])]).uniq();
        }
        return hasAccess(this.acl, config);
    }
}

export default HasRole;
