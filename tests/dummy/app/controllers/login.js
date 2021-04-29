import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

class LoginController extends Controller
{
    @service acl;

    @action
    async login(user)
    {
        const roles = await user.roles.mapBy('name');
        this.acl.login(user, roles);
    }
}

export default LoginController;
