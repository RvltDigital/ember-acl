import Route from '@ember/routing/route';
import { firewall } from 'ember-acl';

@firewall({ bannedRoles: [ 'admin' ] })
class WithoutAdminRoute extends Route
{
}

export default WithoutAdminRoute;
