import Route from '@ember/routing/route';
import { run } from '@ember/runloop';
import hasAccess from './has-access';
import { inject as service } from '@ember/service';

const mixin = (config, target) => class AclRoute extends target
{
    @service acl;

    beforeModel(transition)
    {
        if (!hasAccess(this.acl, config)) {
            return this.transitionTo(this.wrongRoleRoute || 'index');
        }

        run(this, target.prototype.beforeModel, ...arguments);
    }
}

function firewall(config)
{
    return function (target) {

        if (!(target.prototype instanceof Route)) {
            /* eslint no-console: ["error", { allow: ["warn"] }] */
            console.warn('The acl decorator can be used only for routes.');
            return target;
        }

        return mixin(config, target);
    }
}

export default firewall;
