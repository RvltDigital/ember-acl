import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import { addListener } from '@ember/object/events';
import { isEmpty } from '@ember/utils';

class AclService extends Service
{
    @tracked roles = A([]);
    @tracked user = null;

    async login(user, roles = [])
    {
        this.reset();
        this.user = user;
        this.roles = A(roles);
    }

    has(...roles)
    {
        for (const role of roles) {
            if (this.roles.indexOf(role) !== -1) {
                return true;
            }
        }

        return false;
    }

    hasAll(...roles)
    {
        roles = A(roles);
        for (const role of this.roles) {
            roles.removeObject(role);
        }

        return isEmpty(roles);
    }

    reset()
    {
        this.roles = A([]);
        this.user = null;
    }
}

export default AclService;
