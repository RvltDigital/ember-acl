import Route from '@ember/routing/route';
import { firewall } from 'ember-acl';

@firewall({ roles: [ 'manager', 'user' ] })
class ManagerOrUserRoute extends Route
{
}

export default ManagerOrUserRoute;
