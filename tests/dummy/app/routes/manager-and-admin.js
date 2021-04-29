import Route from '@ember/routing/route';
import { firewall } from 'ember-acl';

@firewall({ requiredRoles: [ 'manager', 'admin' ] })
class ManagerAndAdminRoute extends Route
{
}

export default ManagerAndAdminRoute;
