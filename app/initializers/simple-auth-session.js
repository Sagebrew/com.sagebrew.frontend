import Ember from 'ember';
import SimpleAuthSession from 'simple-auth/session';

var CustomSession = SimpleAuthSession.extend({
    authenticatorObject: function () {
        if (Ember.isEmpty(this.get('authenticator'))) {
            return undefined;
        }

        return this.container.lookup(this.get('authenticator'));
    }.property('authenticator'),

    user: function () {
        return this.get('authenticatorObject.user');
    }.property('authenticatorObject.user')
});


export default {
  name: 'custom-session',
  before: 'simple-auth',
  initialize(container, application) {
    application.register('session:custom', CustomSession);
	}
};
