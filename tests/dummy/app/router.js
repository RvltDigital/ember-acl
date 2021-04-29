import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function() {
    this.route('login');
    this.route('admin');
    this.route('manager-and-admin');
    this.route('manager-or-user');
    this.route('without-admin');
});
