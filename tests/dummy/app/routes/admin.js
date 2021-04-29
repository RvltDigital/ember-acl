import Route from '@ember/routing/route';
import { firewall } from 'ember-acl';

@firewall({ roles: [ 'admin' ] })
class AdminRoute extends Route
{
}

export default AdminRoute;
