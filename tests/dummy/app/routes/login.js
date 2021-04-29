import Route from '@ember/routing/route';
import { all } from 'rsvp';

class LoginRoute extends Route
{
    async model()
    {
        const users = (await this.store.findAll('user')).toArray();
        await all(users.mapBy('roles'));
        return users;
    }
}

export default LoginRoute;
