import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

class LoginController extends Controller
{
    @service acl;
}

export default LoginController;
